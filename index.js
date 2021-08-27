require('dotenv').config()
const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const ExpressError = require('./utils/ExpressError');
const flash = require('connect-flash');
const helmet = require('helmet');

const userRoutes = require('./routes/user')
const moduleRoutes = require('./routes/modules')
const mainRoutes = require('./routes/main')
const decisionRoutes = require('./routes/decision')
const reportingRoutes = require('./routes/reporting')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash());
app.use(helmet(
    { contentSecurityPolicy: false }
));




app.use(session({
    name: 'esoap_session',
    secret: process.env.SECRET,
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
app.use('/decision', decisionRoutes);
app.use('/reporting', reportingRoutes);
app.use('/', mainRoutes);


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh no something went wrong!";
    res.status(statusCode).render('error', { err });
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

