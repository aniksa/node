var express = require('express');
var app = express();
var url = require('url');
var cors = require('cors');
var db = require('./handleDB');
app.set('views',__dirname + '/views');
//app.set('view engine', 'html');
//app.engine('html', require('ejs').renderFile);
app.use(cors());
app.all('*', function (req, res) {
    var path = url.parse(req.url).pathname;
    var status = url.parse(req.url, true).query;
    if(path=="/")
    {
        db.add_status(status, res);
    }
    else  if (path == "/add") {
        db.add_status(status, res);
    }
});
app.listen(3000, function () {
    console.log("I am running at port 3000");
});