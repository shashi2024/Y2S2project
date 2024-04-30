import FoodItem from "../model/foodItem.model";
import logger from "../../utils/logger";

export const createFoodItem = async (req, res) => {
  const {
    itemCode,
    name,
    description,
    price,
    mainCategory,
    subCategory,
    isActive,
    imageUrl,
  } = req.body;

  try {
    const newFoodItem = new FoodItem({
      itemCode,
      name,
      description,
      price,
      mainCategory,
      subCategory,
      isActive,
      imageUrl,
    });

    const savedFoodItem = await newFoodItem.save();

    res.status(200).json(savedFoodItem);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).json(foodItems);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const putFoodItem = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedFoodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }

    return res.status(200).json(updatedFoodItem);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};
export const getFoodItem = async (req, res) => {
  const { uniqueId } = req.params;

  try {
    const foodItem = await FoodItem.findOne({ uniqueId });

    if (!foodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }

    return res.status(200).json(foodItem);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};


export const deleteFoodItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFoodItem = await FoodItem.findByIdAndDelete(id);

    if (!deletedFoodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }

    return res.status(200).json(deletedFoodItem);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json({ error: err.message });
  }
}
