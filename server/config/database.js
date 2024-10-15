const mongoose = require("mongoose");

require("dotenv").config();

exports.connection = () => {

    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('DB connected successfully'); 
    })
    .catch(error => { 
        console.log("DB connection issue");
        console.error(error);
        process.exit(1);
    })
}