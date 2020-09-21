const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51HQey7Bo7f429iWD1TuFJe7AvkQpj651jW58i9sBYzSMmMVPBuUAuRSiZdIqD9CpYeRqjx8rOcJvBnezJUblTGib00J3O8EQ3b');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    // total = query params
    const total = request.query.total;  

    console.log("Payment request received!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
         // subunits of the currency
        amount: total,
        currency: "usd",
    });
    // OK  = Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);


// Example endpoint
// http://localhost:5001/clone-57b64/us-central1/api