const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sara:screw.the.world@cluster0-otpuf.mongodb.net/greenfield?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(() => {
    console.log('db connected')
})
.catch((err) => {
    console.log('failed to connect db' , err)
})

const signupSchema =  mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    idnumber: {type: Number, require: true , unique: true},
    age: {type: String, require: true},
    position: {type: String, require: true},
    phonenumber: {type: Number, require: true},
    gender: {type: String, require: true},
    signin: [Date],
    date: { type: Date, default: Date.now }
})

const accountSchema = new mongoose.Schema({
    userid: {type: Number, required: true, unique: true},
    total: {type: Number , required: true},
    lastwitdraw: {type: Number, required: true, default: 0},
    lastdeposite: {type: Number, required: true, default: 0}

})
const signUp = mongoose.model('singUp' , signupSchema)
const account = mongoose.model('account' , accountSchema)

// var account1 = new account ({
//     userid: 123,
//     total: 800
// })
//  account1.save()
//  .then(() =>{
//      console.log('account info saved')
//  })
//  .catch((err) => {
//      console.log('failed to save account info' , err)
//  })

// var user = new signUp({
//     firstname: "Sara",
//     lastname: "Dahman",
//     email: "sara@gmail.com",
//     password: "123345",
//     idnumber: "823569",
//     age: 24,
//     position: "CEO",
//     phonenumber: 0598696628,
//     gender: "female"
// })

// user.save()
// .then(() =>{
//     console.log('user saved')
// })
// .catch((err) => {
//     console.log('failed to save user' , err)
// })
module.exports.signUp=signUp;
module.exports.account=account;