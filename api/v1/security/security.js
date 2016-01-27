var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

module.exports = {
    hash_password: function(req, res, next) {
        var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
        var hash = bcrypt.hashSync(req.body.password, salt);
        if (hash !== req.body.password) {
            req.body.password = hash;
        } else {
            throw "Password hashing failed!";
        }
        next();
    }
};