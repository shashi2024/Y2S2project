const User = require("../model/GuestModel");

//display
const getAllGuests = async (req, res) => { 
    
    let Guests;
    //get all users
    try {
        Guests = await User.find();
    } catch (err) {
         console.log(err);
        }

    //not found
    if(!Guests){
        return res.status(404).json({message:"guest not Found"});
    }   
    
    //display function
    return res.status(200).json({Guests});
 };


// insert

const addGuests = async(req, res, next)=>{

    const {username,password,fullname,passportid,email,phone,language,contactmethod,country,health,payment,request}=req.body;
    
    let guests;

    try{
        guests = new Guest({username,password,fullname,passportid,email,phone,language,contactmethod,arrival,leave,country,health,payment,request});
        await guests.save();
    }catch(err){
        console.log(err);
    }
    //not insert
    if(!guests){
        return res.status(404).send({message:"unable to add guests"});
    }
    return res.status(200).json({guests});
};

//get by id

const getById = async(req, res, next)=>{

    const id = req.params.id;

    let guest;

    try{
        guest = await Guest.findById(id);
    }catch(err){
        console.log(err);
    }
    //not avaliable
    if(!guest){
        return res.status(404).send({message:"guest not found"});
    }
    return res.status(200).json({guest});
};

//update

const updateGuests = async(req, res, next)=>{

    const id = req.params.id;
    const {username,password,fullname,passportid,email,phone,language,contactmethod,country,health,payment,request}=req.body;

    let guests;

    try{
        guests = await User.findByIdAndUpdate(id,
        {username,password,fullname,passportid,email,phone,language,contactmethod,country,health,payment,request},)
        guests = await guests.save();
    }
    catch(err){
        console.log(err);
    }
    //not avaliable
    if(!guests){
        return res.status(404).send({message:"unable to update guests"});
    }
    return res.status(200).json({guests});

};

//delete
const deleteGuests = async(req, res, next)=>{
    const id = req.params.id;

    let guest;

    try{
        guest = await Guest.findByIdAndDelete(id);
    }catch(err){

        console.log(err);
    }
    //not avaliable
    if(!guest){
        return res.status(404).send({message:"unable to delete guests"});
    }
    return res.status(200).json({guest});

};

//--------------------------------------------------------------------------------------------------------------







exports.getAllGuests = getAllGuests;
exports.addGuests = addGuests;
exports.getById = getById;
exports.updateGuests = updateGuests;
exports.deleteGuests = deleteGuests;