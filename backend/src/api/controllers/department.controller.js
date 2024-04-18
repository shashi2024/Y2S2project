import Department from "../model/department.model";
import logger from "../../utils/logger";

//create department
export const createDepartment = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const department = new Department({
    randomNo: randomNumber,
  });

  try {
    const savedDepartment = await department.save();
    const { _id } = savedDepartment;

    res.status(200).json({ savedDepartment, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "department" });
};

//insert department
export const addDepartment = async (req, res, next) => {
  const {dID,department} = req.body;

  let departments;

  try{
    departments = new Department({dID,department});
    await departments.save();
  }catch (err){
    console.log(err);
  }

  if(!departments){
    return res.status(404).send({message:"Unable to add user"});
  }
  return res.status(200).json({
    departments
  })
}

//Get by ID
export const getById = async(req, res, next) => {
  const id =req.params.id;

  let departments;

  try{
    departments=await Department.findById(id);
  }catch (err){
    console.log(err);
  }

  if(!departments){
    return res.status(404).send({message:"Unable to desplay user"});
  }
  return res.status(200).json({
    departments
  })
}

//update department
export const updateDepartment = async (req, res, next) => {

  const id =req.params.id;
  const {name,rID,uID,email,dID} = req.body;

  let departments

  try {
    departments = await Department.findByIdAndUpdate(id,
      {name: name, rID: rID, uID: uID, email: email, dID: dID});
      departments = await departments.save();
  }catch (err){
    console.log(err);
  }

  if(!departments){
    return res.status(404).send({message:"Unable to update user"});
  }
  return res.status(200).json({
    departments
  })
}

//delete ddepartment
export const deleteDepartment = async (req, res, next) => {

  const id =req.params.id;

  let departments;

  try{
    departments= await Department.findByIdAndDelete(id)
  }catch (err){
    console.log(err);
  }

  if(!departments){
    return res.status(404).send({message:"Unable to delete user"});
  }
  return res.status(200).json({
    departments
  })
}
