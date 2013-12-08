
/*
 * GET home page.
 */

exports.index = function(req, res){
  var mongoose = require('mongoose');

  mongoose.connect('mongodb://crewfiresvc:Axvalanch1@ds053838.mongolab.com:53838/crewfire');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        res.render('index', { title: 'Express' });
    });


};