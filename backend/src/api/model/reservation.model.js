import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    tableNumber: Number,
    date: Date,
    time: String,
    numberOfGuests: Number,
    customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    status: String
  });

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;