import express from 'express';
import { engine} from 'express-handlebars';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const PORT = 5000;
// init path
const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static img
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

app.use(bodyParser.json());

app.use('/users',usersRoutes);

// Default Routes
app.get('/', (req, res) => {
    res.render('home');
});

// Routes News
app.get('/news', (req, res) => {
    res.render('news');
});

// Routes Search
app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(PORT, ()  => console.log(`Server running on port: http://localhost:${PORT}`));