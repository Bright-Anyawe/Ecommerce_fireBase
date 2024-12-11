import { useState } from "react";
import useHisto
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { getFunctions, httpsCallable } from "firebase/functions";

export const Checkout = ({ totalAmount }) => {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    // Call Firebase Function to create the payment intent
    const functions = getFunctions();
    const createPaymentIntent = httpsCallable(functions, "createPaymentIntent");

    try {
      // Pass the total amount to the backend to create the payment intent
      const result = await createPaymentIntent({ amount: totalAmount });

      const { clientSecret } = result.data;

      // Confirm the payment with Stripe
      const { error: stripeError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
      } else {
        // Payment successful, navigate to success page
        history.push("/success");
      }
    } catch (err) {
      setError("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement />
      </div>
      {error && <div>{error}</div>}
      <button className="checkOutBtn" disabled={processing} type="submit">
        {processing ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};
