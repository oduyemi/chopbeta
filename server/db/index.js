const mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/chopbetadb';
mongoose
.connect(mongoDB, { useNewUrlParser: true })
.catch(e => {
    console.error("connection-error", e.message)
})
 //Get the default connection
const db = mongoose.connection;



module.exports = db