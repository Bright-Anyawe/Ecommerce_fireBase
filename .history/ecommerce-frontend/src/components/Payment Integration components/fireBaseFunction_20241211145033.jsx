import * as functions from "firebase-functions";
import admin from "firebase-admin";
import Stripe from "stripe";
const stripe = require("stripe")(
  "pk_test_51QUlnZ1lUK5qdTQt8kqBLg6243PNUKkrSBALeBOX5bHYIZ9nbO1sEG61JA8xorR9TYIbdPfZbJA48PDKhEaVf9q200XlXu9gYb"
);
const stripe = new Stripe("sk_test_YOUR_SECRET_KEY");


admin.initializeApp();

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const { amount } = data;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});
