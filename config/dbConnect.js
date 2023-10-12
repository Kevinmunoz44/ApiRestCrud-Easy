const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            
        });
        const url = `${connect.connection.host}:${connect.connection.port}`
        console.log(`Connect to ${url}`)
    } catch (error) {
        console.log(`Error connecting to ${error.message}`)
        process.exit(1)
    }
}

module.exports = dbConnect;