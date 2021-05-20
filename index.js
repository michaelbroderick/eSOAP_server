const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const ExpressError = require('./utils/ExpressError');
const flash = require('connect-flash');

const userRoutes = require('./routes/user')
const moduleRoutes = require('./routes/modules')
const mainRoutes = require('./routes/main')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash());




app.use(session({
    name: 'esoap_session',
    secret: 'emergencysurgery',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use('/user', userRoutes);
app.use('/modules', moduleRoutes);
app.use('/', mainRoutes);


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh no something went wrong!";
    res.status(statusCode).render('error', { err });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

