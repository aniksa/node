const sqlite3 = require('sqlite3').verbose();

// open the database
var db = new sqlite3.Database('sq.sqlite', sqlite3.OPEN_READWRITE);

module.exports = {
    list: function (s, res) {
        var query = "select * from employees";
        db.all(query, function (err, rows) {
            if (err) {
                console.log("Cannot execute"+err);
            }
            else {
                console.log(rows);
                res.json(rows);
            }
        });
    }
};
