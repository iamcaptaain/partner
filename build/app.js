"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routing/index"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 80;
const app = express_1.default();
app.use(cors_1.default());
app.use(index_1.default);
app.set("views", path_1.default.join(__dirname, "templates/"));
app.set("view engine", "ejs");
const uri = `mongodb://localhost:27017/messages`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
//# sourceMappingURL=app.js.map