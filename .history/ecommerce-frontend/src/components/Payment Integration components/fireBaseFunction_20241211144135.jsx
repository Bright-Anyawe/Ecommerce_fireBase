const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(
  "pk_test_51QUlnZ1lUK5qdTQt8kqBLg6243PNUKkrSBALeBOX5bHYIZ9nbO1sEG61JA8xorR9TYIbdPfZbJA48PDKhEaVf9q200XlXu9gYb"
);

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
