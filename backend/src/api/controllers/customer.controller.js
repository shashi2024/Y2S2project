import Customer from "../model/customer.model";
import logger from "../../utils/logger";

export const createCustomer = async (req, res) => {
  const { name } = req.body;

  try {
    const newCustomer = new Customer({ name });

    const savedCustomer = await newCustomer.save();

    res.status(200).json(savedCustomer);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};
