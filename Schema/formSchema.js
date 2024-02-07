import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    passportNo: {
        type: String,
        required: true
    },
    passportdateOfIssue: {
        type: String,
        required: true
    },
    passportValidUpto: {
        type: String,
        required: true
    },
    ilpNo: {
        type: String,
        required: true
    },
    visaNo: {
        type: String,
        required: true
    },
    visaIssue: {
        type: String,
        required: true
    },
    visaValidUpto: {
        type: String,
        required: true
    },
    residentialAddress: {
        type: String,
        required: true
    },
    dateOfVisit: {
        type: String,
        required: true
    },
    durationOfStay: {
        type: String,
        required: true
    },
    travelArrangementBy: {
        type: String,
        required: true
    },
    
    passphoto: {
        data: Buffer,      
        contentType: String, 
        
    },
    signature: {
        data: Buffer,
        contentType: String,
        
    },
    passport: {
        data: Buffer,
        contentType: String,
       
    },
    visa: {
        data: Buffer,
        contentType: String,
        
    },
});

const Form = mongoose.model("Application", formSchema)

export default Form;
