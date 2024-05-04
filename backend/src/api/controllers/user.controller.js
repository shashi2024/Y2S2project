import User from "../model/user.model";
import logger from "../../utils/logger";

//create user
export const createUser = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const user = new User({
    randomNo: randomNumber,
  });

  try {
    const savedUser = await user.save();
    const { _id } = savedUser;

    res.status(200).json({ savedUser, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "user" });
};

//insert user
// export const addUser = async (req, res, next) => {
//   const {name,rID,uID,email,department,password} = req.body;

//   let users;

//   try{
//     users = new User({name,rID,uID,email,department,password});
//     await users.save();
//   }catch (err){
//     console.log(err);
//   }

//   if(!users){
//     return res.status(404).send({message:"Unable to add user"});
//   }
//   return res.status(200).json({
//     users
//   })
// }

//insert user
export const addUser = async (req, res, next) => {
  const { name, rID, uID, email, department, password } = req.body;

  try {
    // Check if a user with the same email or user ID already exists
    const existingUserEmail = await User.findOne({ email });
    const existingUserId = await User.findOne({ uID });

<<<<<<< HEAD
    if (existingUserEmail) {
      return res.status(400).json({ message: "Email already in use." });
    }

    if (existingUserId) {
      return res.status(400).json({ message: "User ID already in use." });
    }

    const user = new User({name,rID,uID,email,department,password});
    await user.save();

    return res.status(200).json({ user });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Server error" });
  }
=======
  try {
    users = new User({ name, rID, uID, email, department, password });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).send({ message: "Unable to add user" });
  }
  return res.status(200).json({
    users,
  });
>>>>>>> 72da37b130e7d435bba16e911536f464252209d7
};

//Get by ID
export const getById = async (req, res, next) => {
  const id = req.params.id;

  let users;

  try {
    users = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).send({ message: "Unable to desplay user" });
  }
  return res.status(200).json({
    users,
  });
};

//update user
export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, rID, uID, email, department, password } = req.body;

  let users;

  try {
    users = await User.findByIdAndUpdate(id, {
      name: name,
      rID: rID,
      uID: uID,
      email: email,
      department: department,
      password: password,
    });
    users = await users.save();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).send({ message: "Unable to update user" });
  }
  return res.status(200).json({
    users,
  });
};

//delete user
export const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let users;

  try {
    users = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).send({ message: "Unable to delete user" });
  }
  return res.status(200).json({
    users,
  });
};
