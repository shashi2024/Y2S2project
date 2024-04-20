import mongoose from "mongoose";
import RestaurantInventoryItem from "./restaurantInventory.model";

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },
  items: [
    {
      foodItemID: { type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" },
      quantity: Number,
      specialRequests: String,
    },
  ],
  paymentStatus: { type: String, default: "Pending" },
  orderStatus: { type: String, default: "Pending" },
  discount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  discountedAmount: { type: Number, required: true },
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  orderDate: {
    type: String,
    default: () => new Date().toISOString().split("T")[0],
  },
  orderTime: { type: String, default: () => new Date().toLocaleTimeString() },
});

orderSchema.pre("save", async function incrementOrderNumber(next) {
  if (this.isNew) {
    const maxOrder = await this.constructor.findOne().sort("-orderNumber");
    const maxOrderNumber = maxOrder ? parseInt(maxOrder.orderNumber, 10) : 0;
    this.orderNumber = (maxOrderNumber + 1).toString().padStart(4, "0");
  }
  next();
});

orderSchema.post("save", async function decreaseInventoryQuantity(doc, next) {
  const updatePromises = doc.items.map(async item => {
    const inventoryItem = await RestaurantInventoryItem.findOne({
      foodItem: item.foodItemID,
    });
    if (!inventoryItem) {
      throw new Error("Inventory item not found");
    }

    if (inventoryItem.quantity < item.quantity) {
      throw new Error("Insufficient quantity in inventory");
    }

    inventoryItem.quantity -= item.quantity;
    return inventoryItem.save();
  });

  await Promise.all(updatePromises);
  next();
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
