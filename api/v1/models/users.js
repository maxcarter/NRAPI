var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = restful.model('Users', schema);