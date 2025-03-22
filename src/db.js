// filepath: d:\my-blog\src\db.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb string connection ", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;