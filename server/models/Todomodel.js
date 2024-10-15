const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim : true,
    },
})

const todo = mongoose.model("todo", TodoSchema);
module.exports = todo;