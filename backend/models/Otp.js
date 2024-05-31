const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    mobileNumber:{
        type: String,
        required: true,
    },
    otp:{
        type:String,
        required: true,
    },
    createdAt:{
        type: Date,
        Default: Date.now,
        expires: 300, // otp expires in 5 minutes
    },
});

module.exports =mongoose.model('Otp', OtpSchema);