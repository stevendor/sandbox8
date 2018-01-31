var     express = require('express');
var     bodyParser = require('body-parser');
var     cors = require('cors');

//mongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://stefan:stefan@ds111608.mlab.com:11608/medical-app');

//models 
var   User = require("./models/user");
var   MedicalHistory = require ("./models/medicalHistory");
    


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//
// ===========================================PACIENTI=======================================
//
//toata lista de pacienti
app.get("/users", function (req, res) {
    User.find({}, function (err, data) {
        if (err) {console.log(err);} 
        else { res.json(data); }
    })
})

//detalii pacient dupa ID
app.get("/users/:id", function (req, res) {
    User.findOne({ _id: req.params.id}).populate({path:'medicalHistory', model: MedicalHistory}).exec( function (err, data) {
        if (err) { console.log(err);} 
        else {res.json(data);}
    });
});

//post pacient nou
app.post("/users", function (req, res) {
    User.create(req.body, function (err, post) {
        if (err) { console.log(err) }
        else {
            res.redirect('http://localhost:3000/users')} ;
    });
});


//find pacient by ID and update him
app.put("/users/:id", function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) {console.log(err) }
        else { res.redirect('http://localhost:3000/users'); }        
    });
});


//find pacient by ID and delete him
app.delete("/users/:id", function (req, res) {
    //cautam pacientul cu ID cerut in baza de date
    User.findById({ _id: req.params.id }, function (err, data) {
        if (err) { console.log(err) }
        else { 
                   var codNP = {'CNP': data.CNP}
                   //cautam inregistrari medicale despre acel pacient
                    MedicalHistory.find(codNP, function (err, data) {
                        if (err) { console.log(err) }
                        else { console.log('success') }
                        // stergem acele inregistrari medicale
                    }).remove(function (err, succes) {
                        if (err) { console.log(err) }
                        else { console.log(succes) }
                     })
                     //stergem pacientul din baza de date
                     User.remove({_id: data._id}, function (err, succes) {
                     if (err) {console.log(err)}
                     else { res.redirect('http://localhost:3000/users')}
                })
              }           

    })
});
                



//
//===========================================istoric medical===========================================
//
//o lista de istorice medicale
app.get("/medical", function (req, res) {
    MedicalHistory.find({}, function (err, data) {
        if (err) { console.log(err); }
        else { res.json(data); }
    })
})
//tot istoricul medical al unei persoane dupa CNP
app.get("/medical/:CNP", function (req, res) {
    var codNP = { 'CNP': req.params.CNP }
    MedicalHistory.find(codNP, function (err, data) {
        if (err) { console.log(err); }
        else { res.json(data); }
    });
});

//post istoric nou
app.post("/medical", function (req, res) {
    var codNP = { 'CNP': req.body.CNP }
    MedicalHistory.create(req.body, function (err, istoric) {
        if (err) { console.log(err) }
        else {   
            //adaugam in pagina userului referinta catre acest istoric medical
                 User.findOne(codNP, function (err, userFound) {
                     if (err) { console.log(err) }
                     else { 
                            userFound.medicalHistory.push(istoric);
                            userFound.save();}
            })
            res.redirect('http://localhost:3000/medical');
        };
    });
});


//update istoric dupa ID
app.put("/medical/:id", function (req, res) {
    MedicalHistory.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) { console.log(err) }
        else { res.redirect('http://localhost:3000/medical'); }
    });
});


//stergere istoric dupa CNP
app.delete("/medical/:id", function (req, res) {
    MedicalHistory.findById(req.params.id, function (err, data) {
        if (err) { console.log(err) }
        else {  
            var idMedical = req.params.id
            // scoatem inregistrarea medicala din pagina userului
            User.findOne({ 'medicalHistory': idMedical }, function (err, data) {
                if (err) { console.log(err) }
                else {
                    if(data) { 
                            for (var i=0; i<=data.medicalHistory.length; i++) {
                                if (String(data.medicalHistory[i])==String(idMedical)){
                                      data.medicalHistory.remove(idMedical);                            
                                      break;
                                }
                            }
                        data.save(function (err, success){
                            if(err) {console.log(err)}
                            else {console.log('you removed a medical history from a user history')}
                        })
                    }
                }});
            }
            // inlaturam inregistrarea medicala
    }).remove(function (err, success) {
        if (err) {console.log(err)}
        else { 
            console.log('you deleted a medical history');
            res.redirect('http://localhost:3000/medical')}   
    });  
});





app.listen(3000, function () {
    console.log("Listening on port 3000");
});