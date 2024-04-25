import UserRoll from "../model/userRoll.model";
import logger from "../../utils/logger";

//create userRoll
export const createUserRoll = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const userRoll = new UserRoll({
    randomNo: randomNumber,
  });

  try {
    const savedUserRoll = await userRoll.save();
    const { _id } = savedUserRoll;

    res.status(200).json({ savedUserRoll, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "userRoll" });
};

export const getAllUsersRoll = async (req, res, next) => {
  try {
    const usersRoll = await UserRoll.find();
    if (usersRoll.length === 0) {
      return res.status(404).json({ message: "No usersRoll found" });
    }
    return res.status(200).json({ usersRoll });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

//insert userRoll
export const addUserRoll = async (req, res, next) => {
  const {rID,rollName} = req.body;

  let userrolls;

  try{
    userrolls = new UserRoll({rID,rollName});
    await userrolls.save();
  }catch (err){
    console.log(err);
  }

  if(!userrolls){
    return res.status(404).send({message:"Unable to add user"});
  }
  return res.status(200).json({
    userrolls
  })
}

//Get by ID
export const getById = async(req, res, next) => {
  const id =req.params.id;

  let userRolls;

  try{
    userRolls=await UserRoll.findById(id);
  }catch (err){
    console.log(err);
  }

  if(!userRolls){
    return res.status(404).send({message:"Unable to desplay user"});
  }
  return res.status(200).json({
    userRolls
  })
}

//update userRoll
export const updateUserRoll = async (req, res, next) => {

  const id =req.params.id;
  const {name,rID,uID,email,dID} = req.body;

  let userRolls

  try {
    userRolls = await UserRoll.findByIdAndUpdate(id,
      {name: name, rID: rID, uID: uID, email: email, dID: dID});
      userRolls = await userRolls.save();
  }catch (err){
    console.log(err);
  }

  if(!userRolls){
    return res.status(404).send({message:"Unable to update user"});
  }
  return res.status(200).json({
    userRolls
  })
}

//delete userRoll
export const deleteUserRoll = async (req, res, next) => {

  const id =req.params.id;

  let userRolls;

  try{
    userRolls= await UserRoll.findByIdAndDelete(id)
  }catch (err){
    console.log(err);
  }

  if(!userRolls){
    return res.status(404).send({message:"Unable to delete user"});
  }
  return res.status(200).json({
    userRolls
  })
}
