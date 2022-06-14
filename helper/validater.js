const Joi = require("@hapi/joi");

const enquiriesValidation = data => {
const schema = {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    mobileNo: Joi.number().required(),
    message: Joi.string().required(),
};
    return Joi.validate(data, schema);
};

module.exports.enquiriesValidation = enquiriesValidation;