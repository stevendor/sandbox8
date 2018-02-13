var mongoose = require('mongoose');

var medicalHistorySchema = new mongoose.Schema({
    
    CNP: {
        type: Number,
        required: true,
        min: 1000000000000,
        max: 9999999999999 },
    dataConsultatie: {
        type: Date,
        default: Date.now, 
        required: true
    },
    dataOP: Date,
    diagnostic: String,
                 
    medicamente: String,
    interventii: String,
    motiveleConsulatiei: String,
    antecedenteHeredocolaterale:String,
    antecedentePersonalePatologice: String,
    antecedenteGinecologice: String,
    antecedenteObstetricale: String,
    nasterea: String,
    dateGenerale: String,
    diverse:  String,
    statusGinecologic: String,
    ecografie: String,
    secretieVaginala: String,
    testBabesPapanicolau: String,
    secretieCervicala: String,
    spermograma: String,
    curbaTermicaBazala: String,
    histeroSalpingoGrafie: String,
    gleraCervicala: String,
    testPostCoital: String,
    examenHistoPatologic: String,
    examinariRecomandate: String,
    climacteriu: String,
    riscBeneficiu: String,
    examinariParacliniceSolicitate: String,
    protocolOperator: String,
    dataUltimeiMenstruatii: String,
});
module.exports = mongoose.model('medicalHistory', medicalHistorySchema);