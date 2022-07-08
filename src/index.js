import express from 'express';
import {engine} from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const app = express();
const PORT = 5000;
// init absolute path
const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// init

// static path img
app.use(express.static(path.join(__dirname,'public')));
// HTTP logger)
//app.use(morgan('combined'));
app.use(morgan('common'));
// Template engine setup
app.engine('hbs',engine({
    extname: 'hbs'
}));

app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));
// CONNECT DATABASE
dotenv.config();
mongoose.connect(process.env.MONGODB_URL,() =>{
    console.log("Connected to MongoDB");
});

app.use(express.json({limit:"50MB"}));
app.use(express.urlencoded({extended: true}));
app.use(cors());


// Routes init
route(app);

app.listen(PORT, ()  => console.log(`Server running on port: http://localhost:${PORT}`));