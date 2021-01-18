"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const formController_1 = require("../controller/formController");
const path_1 = __importDefault(require("path"));
const router = express_1.Router();
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
// router.post('/add-user', addData)
// router.get('/uesrs', showData)
router.get('/', (req, res) => {
    console.log("he;l;");
    res.sendFile(path_1.default.join('/home/captain/work/Leeway/server/src/views/login.html'));
});
router.post('/register/partner', formController_1.registerPartner);
router.get('/list/parterns', formController_1.showParterns);
exports.default = router;
//# sourceMappingURL=index.js.map