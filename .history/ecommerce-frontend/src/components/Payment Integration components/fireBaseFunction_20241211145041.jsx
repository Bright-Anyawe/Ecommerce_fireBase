import * as functions from "firebase-functions";
import admin from "firebase-admin";
import Stripe from "stripe";
const stripe = require("stripe")(
  ""
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
