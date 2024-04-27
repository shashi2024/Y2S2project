import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Special', 'Kids'] },
  description: { type: String },
  appetizers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
  mainCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
  desserts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
  beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
  imageUrl: { type: String, required: true },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu; 