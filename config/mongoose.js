//  mongoose

const mongoose = require('mongoose');

// connection
const connectDB = () => mongoose.connect(process.env.mongoURI)
.then(()=>{console.log("Successfully connected to database")})
.catch((error)=>{console.log("Error while connection with db: ", error)});


module.exports = connectDB;