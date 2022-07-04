import express from 'express';
import {engine} from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';

const app = express();
const PORT = 5000;
// init absolute path
const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// init

// static path img
app.use(express.static(path.join(__dirname,'public')));
// HTTP logger)
app.use(morgan('combined'));

// Template engine setup
app.engine('hbs',engine({
    extname: 'hbs'
}));

app.set('view engine','hbs');

app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes init
route(app);

app.listen(PORT, ()  => console.log(`Server running on port: http://localhost:${PORT}`));

  // V. Use the dotenv file
  
  // require('dotenv').config();
  // app.get('/json',(req,res) => {
  //   if(process.env.MESSAGE_STYLE === 'uppercase'){
  //     res.end(res.json({'message':`${"Hello json".toUpperCase()}`}))
  //   } else {
  //     res.end(res.json({'message':"Hello json"}))
  //   }
  // });

 // VI Implement a Root-level Request Logger Middleware


  // app.use('/json',(req,res,next) => {
  //   const string = req.method + ' ' + req.path + ' - ' + req.ip;
  //   console.log(string);
  //   next();
  // })

// VII. Chain Middleware to Create a Time Server

  // app.get('/now',(req,res,next) =>{
  //   req.time = new Date().toString();
  //   res.json({'time':req.time});
  //   next();
  // },(req,res) =>{
  //   res.send(req.time);
  // })

// VIII. Get Route Parameter Input from the Client

// app.get('/:word/echo',(req,res) => {
//   const {word} = req.params;
//   res.json({
//     echo : word
//   });
// });

// IX. Get Query Parameter Input from the Client

// app.get('/name',(req,res) => {
//   // let firstname = req.query.first;
//   // let lastname = req.query.last;
//   const{first: firstname, last: lastname} = req.query
//   res.end(res.json({'name': `${firstname} ${lastname}`}))
// })

// X. User body-parser to Parse POST Requests

// app.use(bodyParser.urlencoded({extended: false}));

// app.use(bodyParser.json());

// XI. Get Data from POST Requests


// app.post('/name',(req,res) => {
//    const _name = req.body.first + " " + req.body.last;
//   res.end(res.json({name: _name}));
// })