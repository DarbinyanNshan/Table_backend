const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armaturSchema = new Schema({
    date: {
        type: String,
        default: null
    },
    f8a1: {
        type: Number,
        default: null
    },
    f8a3: {
        type: Number,
        default: null
    },
    f12: {
        type: Number,
        default: null
    },
    f14: {
        type: Number,
        default: null
    },
    f16: {
        type: Number,
        default: null
    },
    f18: {
        type: Number,
        default: null
    },
    f20: {
        type: Number,
        default: null
    },
    f22: {
        type: Number,
        default: null
    },
    f25: {
        type: Number,
        default: null
    },
    f28: {
        type: Number,
        default: null
    },
    f32: {
        type: Number,
        default: null
    }
})
module.exports = mongoose.model('armatur', armaturSchema)