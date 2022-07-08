import usersRouter from './users.js';
import newsRouter from './news.js';
import siteRouter from './site.js';
import loginRouter from './login.js';
import registerRouter from './register.js';
import searchRouter from './search.js';
import productRouter from './product.js';

export default function route(app){
    // Actuion --> Dispatcher --> Function handler
    // Default Router
    app.use('/login',loginRouter);
    app.use('/register',registerRouter);
    app.use('/search',searchRouter);
    app.use('/users',usersRouter);
    app.use('/products',productRouter);
    app.use('/news',newsRouter);
    app.use('/', siteRouter);
}