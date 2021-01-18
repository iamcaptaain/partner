"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnObject = void 0;
class returnObject {
    constructor(error, data, message) {
        this.error = error;
        this.data = data;
        this.message = message;
    }
    getError() {
        return this.error;
    }
    getData() {
        return this.data;
    }
    getMessage() {
        return this.message;
    }
    toJSON() {
        return {
            error: this.error,
            data: this.data,
            message: this.message
        };
    }
}
exports.returnObject = returnObject;
//# sourceMappingURL=Common.js.map