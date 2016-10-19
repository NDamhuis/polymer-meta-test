var express = require('express');
var app = express();
app.use(express.static("" + __dirname));
app.use('/primary', express.static("" + __dirname));
app.use('/secondary', express.static("" + __dirname));
app.listen(process.env.PORT || 5000);
