const restFul  = require('node-restful');
const mongoose = restFul.mongoose;

const todoSchema = new mongoose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restFul.model('Todo', todoSchema);