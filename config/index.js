const dotenv = require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    NODE_ENV: process.env.NODE_ENV,
    GMAILID: process.env.GMAILID,
    GMAILPASS: process.env.GMAILPASS,
}