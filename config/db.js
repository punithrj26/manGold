const {connect} = require("mongoose");
const { MONGODB_URL } = require(".");


exports.connectDB = async () => {
    try {
        await connect(MONGODB_URL);
        console.log("Connected to DataBase");
    } catch (error) {
        return error
    }
};
