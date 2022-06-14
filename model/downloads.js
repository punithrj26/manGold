const { Schema, model } = require("mongoose");

let downloadsSchema = new Schema(
{  
    title: {
        type:String
    },
    fileType:{
        type:String
    },
    fileImage: {
        type:String
    },
    file:{
        type:String
    },
},
{
    timestamps: true,
}
);

module.exports = model("downloads", downloadsSchema);