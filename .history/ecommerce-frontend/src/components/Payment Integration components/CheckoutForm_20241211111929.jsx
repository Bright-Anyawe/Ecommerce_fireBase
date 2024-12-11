import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios"; 
import { useContext } from "react";
import { QuantityContext } from "../Context/ContextProvider";

function CheckoutForm() {
     const {qtySummery} = useContext(QuantityContext)
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "AIzaSyCwKsZHIYpZ7Z-i7akMIATKAF5ISmc5dVk",
        {
          qtySummery,
        }
      );
      setClientSecret(data.clientSecret); 
    } catch (error) {
      setError("Failed to create payment intent");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    if (!clientSecret) {
      await createPaymentIntent(); 
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

      console.log("Payment successful! PaymentIntent details:", paymentIntent);

     //  // Example: Send payment details to your backend to store the payment or create an order
     //  try {
     //    await axios.post("your-backend-endpoint-for-storing-payment", {
     //      paymentIntentId: paymentIntent.id,
     //      status: paymentIntent.status, // "succeeded" or "requires_payment_method"
     //      amount: paymentIntent.amount_received, // Total amount paid
     //      currency: paymentIntent.currency, // Currency of the transaction
     //      // Add any other relevant information
     //    });
     //  } catch (error) {
     //    console.error("Error storing payment details:", error);
     //  }
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
