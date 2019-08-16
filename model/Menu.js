var mongoose = require('mongoose');
var MenuSchema = new mongoose.Schema({
    title: String,
    path: String,
    order: Number,
    icon: String,
    topMenuId: String
});
mongoose.model('Menu', MenuSchema);

module.exports = mongoose.model('Menu');