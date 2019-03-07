const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    document: {type: String, require: true, unique: true},
    name: {type: String, require: true},
    roll: {type: String, require: true}
});
module.exports = UserSchema;