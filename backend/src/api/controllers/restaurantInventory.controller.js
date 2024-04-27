import RestaurantInventoryItem from '../model/restaurantInventory.model';
import logger from '../../utils/logger';

export const getInventories = async (req, res) => {
    try {
      const inventories = await RestaurantInventoryItem.find();
      res.status(200).json(inventories);
    } catch (error) {
        logger.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  export const getInventory = async (req, res) => {
    try {
      const inventories = await RestaurantInventoryItem.find({ foodItem: req.params.foodItem });
      res.status(200).json(inventories);
    } catch (error) {
        logger.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  export const putInventory = async (req, res) => {
    try {
      const updatedInventoryItem = await RestaurantInventoryItem.findOneAndUpdate(
        { foodItem: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json(updatedInventoryItem);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };