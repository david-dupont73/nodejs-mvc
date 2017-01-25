var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Document = function (data) {
    this.data = this.sanitize(data);
}

Document.prototype.data = {}


Document.prototype.search = function (begindate,enddate,thematic,folder,fulltext) {

    var whereClause =null;

    if(begindate) { whereClause += "beginDate>="+begindate;}
    if(enddate) { whereClause += "AND enddate<"+endate;}
    if(thematic) { whereClause += "AND enddate<"+thematic;}
    if(folder) { whereClause += "AND folder="+folder;}

    var i=0;
    db.each("SELECT rowid AS id, documentId, title, publicationDate, mediaType, thematic, folder, fulltext  FROM Document where "+whereClause, function(err, row) {
        data[i] = schemas.document;
        data[i].documentId = row.documentId;
        data[i].title = row.title;
        data[i].publicationDate = row.publicationDate;
        data[i].mediaType = row.mediaType;
        data[i].thematic = row.thematic;
        data[i].fulltext = row.fulltext;
        i++;
    });


    return this.data[name];
}

Document.prototype.set = function (name, value) {
    this.data[name] = value;
}

Document.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.Document;
    return _.pick(_.defaults(data, schema), _.keys(schema));
}

Document.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('Documents', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}

Document.findById = function (id, callback) {
    db.get('Documents', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Document(data));
    });
}

module.exports = Document;