import mongoose from "mongoose";
import Customer from "./customer.model";

const paymentSchema = new mongoose.Schema({
    
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer,
        required: true,
    },
    orderID: {
        type: String,
        required: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
}); 

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

