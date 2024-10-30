// global variables
const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// middleware
app.set('view engine', 'ejs');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use(session({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: true
}));
app.use(methodOverride('_method'));


// server listening
const server = app.listen(PORT, () => {
    console.log('listening at PORT ', PORT);
});

module.exports = server;