const Reservation = require("../model/ReservationModel");

//display
const getAllReservations = async (req, res) => { 
    
    let Reservations;
    //get all reservations
    try {
        Reservations = await Reservation.find();
    } catch (err) {
         console.log(err);
        }

    //not found
    if(!Reservations){
        return res.status(404).json({message:"Reservation not Found"});
    }   
    
    //display function
    return res.status(200).json({Reservations});
 };


// insert

const addReservations = async(req, res, next)=>{

    const {reservationid,passportid,noofdays,roomno,floor,type,noofbeds,balcony,ac,request,arrival,leave}=req.body;
    
    let reservations;

    try{
        reservations = new Reservation({reservationid,passportid,noofdays,roomno,floor,type,noofbeds,balcony,ac,request,arrival,leave});
        await reservations.save();
    }catch(err){
        console.log(err);
    }
    //not insert
    if(!reservations){
        return res.status(404).send({message:"unable to add reservation"});
    }
    return res.status(200).json({reservations});
};

//get by id

const getById = async(req, res, next)=>{

    const id = req.params.id;

    let reservation;

    try{
        reservation = await Reservation.findById(id);
    }catch(err){
        console.log(err);
    }
    //not avaliable
    if(!reservation){
        return res.status(404).send({message:"reservation not found"});
    }
    return res.status(200).json({reservation});
};

//update

const updateReservations = async(req, res, next)=>{

    const id = req.params.id;
    const {reservationid,passportid,noofdays,roomno,floor,type,noofbeds,balcony,ac,request,arrival,leave}=req.body;

    let reservations;

    try{
        reservations = await Reservation.findByIdAndUpdate(id,
        {reservationid,passportid,noofdays,roomno,floor,type,noofbeds,balcony,ac,request,arrival,leave},)
        reservations = await reservations.save();
    }
    catch(err){
        console.log(err);
    }
    //not avaliable
    if(!reservations){
        return res.status(404).send({message:"unable to update reservation"});
    }
    return res.status(200).json({reservations});

};

//delete
const deleteReservations = async(req, res, next)=>{
    const id = req.params.id;

    let reservation;

    try{
        reservation = await Reservation.findByIdAndDelete(id);
    }catch(err){

        console.log(err);
    }
    //not avaliable
    if(!reservation){
        return res.status(404).send({message:"unable to delete reservation"});
    }
    return res.status(200).json({reservation});

};



exports.getAllReservations = getAllReservations;
exports.addReservations = addReservations;
exports.getById = getById;
exports.updateReservations = updateReservations;
exports.deleteReservations = deleteReservations;