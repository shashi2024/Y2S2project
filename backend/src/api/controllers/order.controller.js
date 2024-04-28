import Order from "../model/order.model";
import logger from "../../utils/logger";

export const createOrder = async (req, res) => {
  const {
    items,
    discount,
    totalAmount,
    discountedAmount,
    customerID,
    paymentStatus,
    orderStatus,
  } = req.body;
  const order = new Order({
    items,
    discount,
    totalAmount,
    discountedAmount,
    customerID,
    paymentStatus,
    orderStatus,
  });

  try {
    await order.save();
    // eslint-disable-next-line no-underscore-dangle
    logger.info(`Order created with id: ${order._id}`);
    res.status(201).json(order);
  } catch (err) {
    logger.error(`Failed to create order: ${err.message}`);
    res.status(400).json({ message: err.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("customerID");
    logger.info(`Fetched ${orders.length} orders`);
    return res.json(orders);
  } catch (err) {
    logger.error(`Failed to fetch orders: ${err.message}`);
    return res.status(500).json({ message: err.message });
  }
};

export const putOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!order) {
      logger.error(`Order not found with id: ${req.params.id}`);
      return res.status(404).json({ message: "Order not found" });
    }

    // eslint-disable-next-line no-underscore-dangle
    logger.info(`Order updated with id: ${order._id}`);
    return res.json(order);
  } catch (err) {
    logger.error(`Failed to update order: ${err.message}`);
    return res.status(400).json({ message: err.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("customerID");
    if (!order) {
      logger.error(`Order not found with id: ${req.params.id}`);
      return res.status(404).json({ message: "Order not found" });
    }
    // eslint-disable-next-line no-underscore-dangle
    logger.info(`Fetched order with id: ${order._id}`);
    return res.json(order);
  } catch (err) {
    logger.error(`Failed to fetch order: ${err.message}`);
    return res.status(500).json({ message: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      logger.error(`Order not found with id: ${req.params.id}`);
      return res.status(404).json({ message: "Order not found" });
    }

    await order.remove();
    // eslint-disable-next-line no-underscore-dangle
    logger.info(`Order deleted with id: ${order._id}`);
    return res.json({ message: "Order deleted" });
  } catch (err) {
    logger.error(`Failed to delete order: ${err.message}`);
    return res.status(500).json({ message: err.message });
  }
};
