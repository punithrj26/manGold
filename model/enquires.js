const { Schema, model } = require("mongoose");

let enquirySchema = new Schema(
{  
    enquiryNo: {
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobileNo: {
        type:Number
    },
    message:{
        type:String
    },
},
{
    timestamps: true,
}
);

module.exports = model("enquirys", enquirySchema);