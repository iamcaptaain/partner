"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Partner = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        unique: true,
        required: true,
    },
    imgaeUrl: {
        type: String
    },
    request_tracker: {
        type: Number,
        default: 0,
    },
    join_date: {
        type: Date,
        default: Date.now()
    },
    last_login: {
        type: Date,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 256
    }
});
exports.default = mongoose_1.model("Partner", Partner);
//# sourceMappingURL=Partner.js.map