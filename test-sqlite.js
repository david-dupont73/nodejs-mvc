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

db.serialize(function() {
    if(!exists) {
        db.run("CREATE TABLE Document (" +
            "documentId INTEGER ," +
            "title TEXT,"+
            "publicationDate Text,"+ /*"format YYYY-MM-DD HH:MM:SS.SSS"*/
            "mediaType TEXT,"+
            "thematic TEXT,"+
            "folder TEXT,"+
            "fulltext TEXT" +
            ")");
    }

    db.run("CREATE  INDEX IX_PublicationDate ON Document(publicationDate);");
    db.run("CREATE  INDEX IX_mediaType ON Document(mediaType);");
    db.run("CREATE  INDEX IX_Thematic ON Document(thematic);");
    db.run("CREATE  INDEX IX_Folder ON Document(folder);");

    db.run( "INSERT INTO Document (documentId,title,publicationDate,mediaType,thematic,folder,fulltext) " +
            "VALUES (1,'Titre1','2017-01-23 07:00:00.000','PRESS','ECONOMY','CORPORATE','Ceci est du texte.....du blabla pour test')",
        function(err,txt){
            if(err) console.log("Err:"+err);
        });

    db.run("INSERT INTO Document VALUES (2,'Titre2','2017-01-22 07:00:00.000','PRESS','FINANCIAL','CONCURRENCE','Ceci est encore du texte.....du blabla pour test')");
    db.run("INSERT INTO Document VALUES (3,'Titre3','2017-01-22 05:55:12.000','RADIO','ECONOMY','CORPORATE','Ceci est du texte RADIO.....du blabla pour test')");
    db.run("INSERT INTO Document VALUES (4,'Titre4','2017-01-23 07:00:00.000','TV','DIVERTISSEMENT','FAMILLE','Ceci est de la TV.....du blabla pour test')");
    db.run("INSERT INTO Document VALUES (5,'Titre5','2017-01-03 07:00:00.000','WEB','NET-TECH','DIVERS',' CES LAS VEGAS 2017.....du blabla pour test')");
    db.run("INSERT INTO Document VALUES (6,'Titre6','2017-01-06 07:00:00.000','TWITTER','BLOGGEUR','EUROPE','Ceci est un @Tweet #KMPLUS.....du blabla pour test')");


    db.each("SELECT rowid AS id, documentId, title, publicationDate, mediaType, thematic, folder, fulltext  FROM Document", function(err, row) {
        console.log(row.id + ": " +
                    row.documentId + ": " +
                    row.title + ": " +
                    row.publicationDate + ": " +
                    row.mediaType + ": " +
                    row.thematic + ": " +
                    row.folder + ": " +
                    row.fulltext);
    });

});

db.close();