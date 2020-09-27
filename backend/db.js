const mongoose = require("mongoose");

//Connect to the database:
mongoose.connect(
    //INSERT the connection string here
    { useNewUrlParses: true, useUnifiedTopology: true }
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = new mongoose.model("Payment", paymentSchema);

module.exports = {
    Payment
}