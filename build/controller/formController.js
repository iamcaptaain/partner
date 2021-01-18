"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showParterns = exports.registerPartner = void 0;
const Partner_1 = __importDefault(require("../models/Partner"));
const registerPartner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield Partner_1.default.findOne({ contact: req.body.phone });
    if (!check && (req.body.password == req.body.pass)) {
        const partner = new Partner_1.default({
            name: req.body.name,
            contact: req.body.phone,
            imageUrl: req.body.image,
            join_date: Date.now(),
            password: req.body.password
        });
        let _new = yield partner.save();
        res.status(200).json({
            message: "Added",
        });
    }
    else {
        res.status(400).json({
            messages: "user already exist"
        });
    }
});
exports.registerPartner = registerPartner;
const showParterns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _data = yield Partner_1.default.find();
    res.status(201).json({
        data: _data,
        message: "Hello these"
    });
});
exports.showParterns = showParterns;
//# sourceMappingURL=formController.js.map