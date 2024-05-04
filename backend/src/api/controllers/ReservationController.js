const Reservation = require("../model/ReservationModel");
const PDFDocument = require("pdfkit");

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


//--------------------------------------------------------------------------------------------------------------


const generatePDF = async (req, res, next) => {
    try {
        // Fetch guest data from the database
        const reservations = await Reservation.find();

        // If no guests are found, send a 404 response
        if (reservations.length === 0) {
            return res.status(404).json({ message: "Reservation not found" });
        }

        // Set response headers for PDF
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=reservations_list.pdf");

        // Create a new PDF document
        const PDFDocument = require("pdfkit");
        const doc = new PDFDocument();

        // Pipe the PDF content to the response
        doc.pipe(res);

        // Add content to the PDF
        doc.fontSize(20).text("Reservation List", { align: "center" });
        doc.moveDown();

        // Draw table headers
        const tableHeaders = ["reservationid","passportid","noofdays","roomno","floor","type","noofbeds","balcony","ac","request","arrival","leave"];
        const rowHeight = 20;
        const startX = 50;

        tableHeaders.forEach((header, i) => {
            doc.text(header, startX + i * 100, doc.y);
        });

        // Move to the next line for the table body
        doc.moveDown();
        doc.y += rowHeight;

        // Draw table rows
        reservations.forEach((reservation) => {
            tableHeaders.forEach((key, i) => {
                doc.text(reservation[key], startX + i * 100, doc.y);
            });
            // Move to the next line for the next row
            doc.moveDown();
            doc.y += rowHeight;
        });

        // End the document
        doc.end();
    } catch (error) {
        console.error("Error generating PDF:", error);
        return res.status(500).json({ message: "Error generating PDF" });
    }
};



exports.getAllReservations = getAllReservations;
exports.addReservations = addReservations;
exports.getById = getById;
exports.updateReservations = updateReservations;
exports.deleteReservations = deleteReservations;

exports.generatePDF = generatePDF;