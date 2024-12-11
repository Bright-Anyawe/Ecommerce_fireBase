const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51QUlnZ1lUK5qdTQtakW76Pygr7NNlfoRhbft1r5RdMAoVkWESl0lLbi0ng6OXpNmDJHuvPOntjBSS2UJz6HZX1PM00h4h31TzF"
); // Use your Stripe secret key here

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
