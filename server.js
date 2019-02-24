const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');

const app = express();
const httpport = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'src'));
app.set('LUXOFTDB','mongodb://localhost:27017/LUXOFTDB');
app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(require('./server/detailsAll_api'));
app.use(require('./server/addEmployee_api'));
app.use(require('./server/deleteEmployee_api'));
app.use(require('./server/employeeDetail_api'));
app.use(require('./server/updateDetail_api'));

app.listen(httpport, function() {
    console.log('Server started on the port'+ httpport);
});

module.exports = app;