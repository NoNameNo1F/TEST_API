import usersRouter from './users.js';
import newsRouter from './news.js';
import siteRouter from './site.js';

export default function route(app){

    app.use('/users',usersRouter);
    app.use('/news',newsRouter);
    app.use('/', siteRouter);
    // Default Router
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    // Routes News
    // app.get('/news', (req, res) => {
    //     //console.log(req.query);
    //     res.render('news');
    // });
    
    // Actuion --> Dispatcher --> Function handler
    // Routes Search
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // }); 
    
    
    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('received query');
    // });
    
    
    // Routes Login
    app.get('/login', (req, res) => {
        res.render('login');
    });
    
    // Routes Register
    app.get('/register', (req, res) => {
        res.render('register');
    });
    
}

//export default route(app);
