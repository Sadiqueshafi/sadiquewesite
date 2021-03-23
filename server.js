// const express = require('express');
// const corse =require('cors');
// const bodyParser =require('body-parser');
// const nodemailer = require('nodemailer');
// const app = express();

// app.use(corse({origin:'*'}));
// app.use(bodyParser.json());

// const path = require('path');



// const PORT = process.env.PORT || 8080;


// app.post("/sendemail",(req,res)=>{
//   console.log("request came")
//   let user =req.body;
//   console.log(user)
//   sendMail(user,info =>{
//     console.log(`the mail has been send to me ${info.messageId}`);
//     res.send(info)
//   })
// })
// async function sendMail(user,callback){
//   var transporter = nodemailer.createTransport({
//     host:"smtp.gmail.com",
//     port:587,
//     secure:false,
//     auth: {
//       user: '1234sadique1234@gmail.com',
//       pass: 'patanahi'
//     }
//   }); 
  
//   let mailOptions = {
//     from: '1234sadique1234@gmail.com',
//     to: user.email,
//     subject: 'Welcome sadique',
//     text: 'That was easy!'
//   };
//   let info = await transporter.sendMail(mailOptions)
//   callback(info)
// }





// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.use((err,req,res,next)=>{
//   if (err.name === 'ValidationError'){
//     var valErrors =[];
//     Object.keys(err.errors).forEach(key=>{
//       valErrors.push(err.errors[key].message)
//     });res.status(422).send(valErrors)
//   }
// })

// app.use((req,res,next)=>{
  
//   res.setHeader('Access-Control-Allow-Headers','Origin','X-Requested-With','Content-Type','Accept','Authorization');
//   res.setHeader('Access-Control-Allow-Methods',"GET","POST","PUT","PATCH","DELETE","OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
//   next();
// })

// app.use(express.static(__dirname + '/angularapp'));

// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+'/angularapp/index.html'));
// });

// // if(process.env.NODE_ENV ==='production'){
//   //   app.use(express.static('dist/herohu'));
//   //   app.use(express.static(__dirname + '/angularapp'));
//   // // app.use(express.static('./dist/herohu'))
//   // }

//   app.listen(PORT,console.log(`server is starting at ${PORT}`));


const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);











  