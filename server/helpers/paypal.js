require("dotenv").config();
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // or "live" if you're using production credentials
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;
