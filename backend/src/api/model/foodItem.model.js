import mongoose from "mongoose";
import RestaurantInventoryItem from "./restaurantInventory.model";
import logger from "../../utils/logger";

const foodItemSchema = new mongoose.Schema({
  itemCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  mainCategory: {
    type: String,
    enum: ["Appetizers", "Main Courses", "Desserts", "Beverages"],
    required: true,
  },
  subCategory: {
    type: String,
    enum: ["Vegi", "Non-Vegi", "Cocktail", "Mocktail", "Tea", "Coffee"],
    required: false,
  },
  isActive: { type: Boolean, default: false },
  imageUrl: { type: String, required: true },
  uniqueId: { type: String },
});

foodItemSchema.pre("save", async function generateUniqueId(next) {
  if (!this.isNew) {
    next();
    return;
  }

  const mainCategoryInitials = this.mainCategory
    .split(" ")
    .map(word => word[0])
    .join("");
  const subCategoryInitials = this.subCategory
    ? this.subCategory
        .split(" ")
        .map(word => word[0])
        .join("")
    : "";
  const categoryInitials = mainCategoryInitials + subCategoryInitials;

  const lastFoodItem = await this.constructor
    .findOne({ mainCategory: this.mainCategory, subCategory: this.subCategory })
    .sort("-uniqueId");
  const lastIdNumber =
    lastFoodItem && lastFoodItem.uniqueId
      ? parseInt(lastFoodItem.uniqueId.slice(categoryInitials.length), 10)
      : 0;

  this.uniqueId = categoryInitials + String(lastIdNumber + 1).padStart(4, "0");
  next();
});

foodItemSchema.post("save", async function initializeInventory(doc, next) {
  // eslint-disable-next-line no-underscore-dangle
  const inventoryItem = await RestaurantInventoryItem.findOne({
    // eslint-disable-next-line no-underscore-dangle
    foodItem: doc._id,
  });

  if (!inventoryItem) {
    logger.info("new product");
    const newInventoryItem = new RestaurantInventoryItem({
      // eslint-disable-next-line no-underscore-dangle
      foodItem: doc._id,
      quantity: 0,
    });
    await newInventoryItem.save();
  }

  next();
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
