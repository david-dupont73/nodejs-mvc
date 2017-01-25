/**
 * Created by daviddupont on 24/01/2017.
 */
var fs = require("fs");
var file = "./test.db";
var exists = fs.existsSync(file);

if(!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


module.exports = db;