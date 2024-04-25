const mongoose = require('mongoose');

const dburl = "mongodb+srv://it22146274:it22146274@cluster0.flf7mwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery",true ,"useNewUrlParser",true);

const connection = async () => {
    try {
        await mongoose.connect(dburl);
        console.log("MongoDB Connected~");
    }catch(e) {
        console.error(e.message);
        process.exit();
}

};

module.exports = connection;
