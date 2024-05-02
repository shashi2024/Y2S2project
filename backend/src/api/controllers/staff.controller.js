import Staff from "../model/staff.model";
import logger from "../../utils/logger";

//create staff
export const createStaff = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const staff = new Staff({
    randomNo: randomNumber,
  });

  try {
    const savedStaff = await staff.save();
    const { _id } = savedStaff;

    res.status(200).json({ savedStaff, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "staff" });
};

export const getAllStaff = async (req, res, next) => {
  try {
    const staff = await Staff.find();
    if (staff.length === 0) {
      return res.status(404).json({ message: "No staff found" });
    }
    return res.status(200).json({ staff });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};


//insert staff
export const addStaff = async (req, res, next) => {
  const {name,sID,email,department,nic,position} = req.body;

  let staffs;

  try{
    staffs = new Staff({name,sID,email,department,nic,position});
    await staffs.save();
  }catch (err){
    console.log(err);
  }

  if(!staffs){
    return res.status(404).send({message:"Unable to add user"});
  }
  return res.status(200).json({
    staffs
  })
}

//Get by ID
export const getById = async(req, res, next) => {
  const id =req.params.id;

  let staffs;

  try{
    staffs=await Staff.findById(id);
  }catch (err){
    console.log(err);
  }

  if(!staffs){
    return res.status(404).send({message:"Unable to desplay user"});
  }
  return res.status(200).json({
    staffs
  })
}

//update staff
export const updateStaff = async (req, res, next) => {

  const id =req.params.id;
  const {name,nic,sID,email,department,position} = req.body;

  let staffs

  try {
    staffs = await Staff.findByIdAndUpdate(id,
      {name: name, nic: nic, sID: sID, email: email, position:position, department: department});
      staffs = await staffs.save();
  }catch (err){
    console.log(err);
  }

  if(!staffs){
    return res.status(404).send({message:"Unable to update user"});
  }
  return res.status(200).json({
    staffs
  })
}

//delete staff
export const deleteStaff = async (req, res, next) => {

  const id =req.params.id;

  let staffs;

  try{
    staffs= await Staff.findByIdAndDelete(id)
  }catch (err){
    console.log(err);
  }

  if(!staffs){
    return res.status(404).send({message:"Unable to delete user"});
  }
  return res.status(200).json({
    staffs
  })
}
