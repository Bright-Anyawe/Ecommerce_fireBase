const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")("AIzaSyCwKsZHIYpZ7Z-i7akMIATKAF5ISmc5dVk"); // Use your Stripe secret key here

admin.initializeApp();

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const { amount } = data; // The total amount you want to charge

  // Create a PaymentIntent with the amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});
