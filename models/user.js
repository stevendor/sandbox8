var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    CNP: {
        type: Number,
        required: true,
        unique: true,
        min: 1000000000000,
        max: 9999999999999 },
    firstName: {
        type: String,
        required: true,
        trim: true },
    lastName: {
        type: String,
        required: true,
        trim: true},
    email: {
        type: String,
        trim: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email account']
    },
    dateOfBirth: {
        type: Date, 
        default: Date.now},
    medicalHistory: [ {type: mongoose.Schema.Types.ObjectId, ref: 'MedicalHistory'} ],
    activ: {type: Boolean, default: true}
});

module.exports = mongoose.model('User', userSchema);

