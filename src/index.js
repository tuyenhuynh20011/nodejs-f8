const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./resources/routes/index');

// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')));

var hbs = handlebars.create({
  // defaultLayout: 'main',
  extname: '.hbs',
});
app.use(morgan('combined'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// xmlHttpRequest , fetch ,axios
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
