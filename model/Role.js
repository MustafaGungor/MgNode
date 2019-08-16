var mongoose = require('mongoose');
var RolSchema = new mongoose.Schema({
    name: String
});
mongoose.model('Role', RolSchema);

module.exports = mongoose.model('Role');