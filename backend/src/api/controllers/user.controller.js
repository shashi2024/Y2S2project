import User from "../model/user.model";
import logger from "../../utils/logger";

export const createUser = async (req, res) => {
  const { name, rID, uID, email, dID } = req.body;

  try {
    const newUser = new User({ name, rID, uID, email, dID });

    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  const { uniqueId } = req.params;

  try {
    const user = await User.findOne({ uniqueId });
    res.status(200).json(user);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const putUser = async (req, res) => {
  const { name, rID, uID, email, dID } = req.body;
  const { uniqueId } = req.params;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { uniqueId },
      {
        name,
        rID,
        uID,
        email,
        dID,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
  }
};
