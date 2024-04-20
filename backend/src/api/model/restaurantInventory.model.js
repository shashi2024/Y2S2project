/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import logger from '../../utils/logger';

const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
  foodItem: { 
    type: Schema.Types.ObjectId, 
    ref: 'FoodItem', 
    required: true 
  },
  quantity: { 
    type: Number, 
    default: 0 
  },
  lowStockAlert: { 
    type: Boolean, 
    default: false 
  }
});

inventoryItemSchema.pre('save', function Alert(next) {
  if (this.isNew) {
    logger.info('New Inventory Item Added');
    this.lowStockAlert = this.quantity <= 10; 
  } else if (this.isModified('quantity')) {
    logger.info('Quantity modified');
    this.lowStockAlert = this.quantity <= 10; 
  }
  next();
});

inventoryItemSchema.pre('findOneAndUpdate', async function updateQuantity(next) {
  const update = this.getUpdate();
  if (update.quantity !== undefined) {
    logger.info('Quantity modified');
    this._update.$inc = this._update.$inc || {};
    this._update.$inc.quantity = update.quantity;
    delete this._update.quantity;
    const docToUpdate = await this.model.findOne(this.getQuery());
    this._update.$set = this._update.$set || {};
    this._update.$set.lowStockAlert = (this._update.$inc.quantity + docToUpdate.quantity) <= 10;
  }
  next();
});

const RestaurantInventoryItem = mongoose.model("RestaurantInventory", inventoryItemSchema);

export default RestaurantInventoryItem;