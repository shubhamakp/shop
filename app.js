const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));
app.use(adminData.routes);
app.use(shopRoutes);

app.listen(3000);