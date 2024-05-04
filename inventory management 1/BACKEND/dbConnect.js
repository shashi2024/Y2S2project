import mongoose from "mongoose";

const dbConnect = ()=>{
    const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(process.env.DB, connectionParams);


    //listens to the mongodb event "connected"
    mongoose.connection.on("connected", ()=>{
        console.log("Connected to database successfully");
    });

    //listens to the mongodb event "error"
    mongoose.connection.on("error", (err) =>{
        console.log("Error while connecting to database:" + err);
    });

    //listens to the mongodb event "disconnected"
    mongoose.connection.on("disconnected", ()=>{
        console.log("Mongodb connection disconnected");
    });
};

export default dbConnect;