import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios"; 
import 

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post("your-backend-endpoint", {
        /* data like cart info */
      });
      setClientSecret(data.clientSecret); // Set clientSecret once PaymentIntent is created
    } catch (error) {
      setError("Failed to create payment intent");
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create PaymentIntent only when the user is about to submit the form
    if (!clientSecret) {
      await createPaymentIntent(); // Call the function to create PaymentIntent
    }

    if (!stripe || !elements || !clientSecret) return;

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
      // Handle successful payment here

      // Now you can use `paymentIntent` to confirm the payment was successful
      console.log("Payment successful! PaymentIntent details:", paymentIntent);

      // Example: Send payment details to your backend to store the payment or create an order
      try {
        await axios.post("your-backend-endpoint-for-storing-payment", {
          paymentIntentId: paymentIntent.id,
          status: paymentIntent.status, // "succeeded" or "requires_payment_method"
          amount: paymentIntent.amount_received, // Total amount paid
          currency: paymentIntent.currency, // Currency of the transaction
          // Add any other relevant information
        });
      } catch (error) {
        console.error("Error storing payment details:", error);
      }
    }

    setLoading(false);
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
