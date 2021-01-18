"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    color: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model("User", User);
//# sourceMappingURL=Users.js.map