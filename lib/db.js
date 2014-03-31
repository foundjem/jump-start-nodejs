// Database module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud NoSQL database
var username = "jochasinga";
var password = "Python7321";
var address = '@ds037077.mongolab.com:37077/stocky';
connect();

// Connect to mongo
function connect() {
    var url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}
function disconnect() {
    mongoose.disconnect();
}