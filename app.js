const express = require('express');
const router = require('./config/routes');
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const uuid = require('uuid');
const session = require('express-session');

const app = express();

app.engine(
  'handlebars',
  handlebars({
    helpers: require(`${__dirname}/app/views/helpers`),
    layoutsDir: __dirname + '/app/views/layouts',
    defaultLayout: 'main',
  }),
);

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');

app.use('/assets', [express.static(__dirname + '/public/assets')]);

app.use('/webfonts', [
  express.static(
    __dirname + '/node_modules/@fortawesome/fontawesome-free/webfonts/',
  ),
]);

app.use(
  sass({
    src: __dirname + '/public/scss',
    dest: __dirname + '/public/css',
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use('/css', express.static(__dirname + '/public/css'));

app.use('/js', [
  express.static(__dirname + '/node_modules/jquery/dist/'),
  express.static(__dirname + '/node_modules/popper.js/dist/umd/'),
  express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
  express.static(__dirname + '/public/js'),
]);

app.use(logger('combined'));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(csurf({ cookie: true }));

app.use(router);

app.listen(3000, function () {
  console.log('Express app iniciada na porta 3000.');
});
