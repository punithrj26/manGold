const { enquiriesValidation } = require("../helper/validater");
const downloadsModel = require("../model/downloads");
const enquiryModel = require("../model/enquires");
const nodemailer = require("nodemailer");
const { GMAILID, GMAILPASS } = require("../config");
const { v4: uuid } = require('uuid')

// const img = require("../public/files/image/d1.jpg");
// const doc = require("../public/files/docs/Air-Core Reactors for Medium Voltage Networks.pdf");

//? use -  /provider-merge-demerge/(merge or demerge)
exports.allDownloads = async (req, res) => {
    try {
        let downloadData = await downloadsModel.find({});
        if (downloadData.length != 0) {
            res.status(200).send({ message: `All files are Featched`, downloadData });
        } else {
            res.status(200).send({ message: "No file available in DB" });
        }
    } catch (error) {
        res.status(400).send({message:"Error could not fetch request list from db",error})
    }
}

exports.enquireResponse = async (req, res) => {
    try {
        //? hapi/Joi Validation 
        const { error } = enquiriesValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        
        // let gmail = GMAILID
        // let gpass = GMAILPASS
        console.log(req.body,1,GMAILID,2,GMAILPASS);
        // let {name,email,mobileNo,message} = req.body

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: GMAILID,
                pass: GMAILPASS,
            },
        });

        let mailOptions = {
            from: GMAILID,
            to: `${req.body.email}`,
            subject: "Thank you for showing intrest in oour product - MEHER MANGOLDT INDUCTORS PVT. LTD.",
            html: `<h1>Hello ${req.body.name},</h1>
                <p> We will get back to you soon!</p>`,
        };

        if (req.body) {
            const userDetails = new enquiryModel({
                enquiryNo:`EQN${uuid().slice(28,36).toUpperCase()}`,
                name:req.body.name,
                email:req.body.email,
                mobileNo:req.body.mobileNo,
                message:req.body.message
            })

            const enquiryDetails = await userDetails.save();
            res.status(200).send({ message: "Submitted successfully", enquiryDetails })
        } 

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    } catch (error) {
        res.status(400).send({message:"Error could not send enquire request",error})
    }
}

// exports.enquireResponseget = async (req, res) => {
//     try {
//         let sendData = await downloadsModel.insertOne({
//             title: "Air-Core Reactors for Medium Voltage Networks",
//             fileType: "PDF File (170KB)",
//             fileImage: img,
//             file: doc,
//         });
//         res.status(200).send({ message:"Error not saved"})
//     } catch (error) {
//         res.status(400).send({message:"Error could not send",error})
//     }
// }
