import * as functions from "firebase-functions";
import admin from "firebase-admin";
import Stripe from "stripe";
const stripe = new Stripe(
  "pk_test_51QUlnZ1lUK5qdTQt8kqBLg6243PNUKkrSBALeBOX5bHYIZ9nbO1sEG61JA8xorR9TYIbdPfZbJA48PDKhEaVf9q200XlXu9gYb"
);
import cors from "cors";

admin.initializeApp();

export const createPaymentIntent = functions.https.onCall(
  async (data, context) => {
    const { amount } = data;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  }
);