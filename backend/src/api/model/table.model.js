import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    number: Number,
    status: String,
    seatingCapacity: Number
  });

const Table = mongoose.model("Table", tableSchema);
export default Table;
