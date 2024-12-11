import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios"; // Make sure to install axios

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setError(error.message);
    } else {
      setSucceeded(true);
      // Handle successful payment here (e.g., store order in Firebase, show success message)
    }

    setLoading(false);
  };

  // Fetch clientSecret (called when the user clicks checkout)
  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post("your-backend-endpoint", {
        /* data like cart info */
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      setError("Failed to create payment intent");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || loading || succeeded}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {succeeded && <div>Payment successful! Thank you for your order.</div>}
    </form>
  );
}

export default CheckoutForm;
