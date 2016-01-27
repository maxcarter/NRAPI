var security = require('../security/security');

module.exports = function(router) {
    var Users = require('../models/users');
    Users.methods(['get', 'put', 'post', 'delete']);
    Users.before('post', security.hash_password);
    Users.before('put', security.hash_password);
    Users.register(router, '/users');
}