"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var path_1 = __importDefault(require("path"));
var addImage = function (req, res, next) {
    if (!req.files) {
        res.status(400).json({ error: "image not found" });
        return;
    }
    else {
        // console.log(req.files)
        var myImage = req.files.myImage;
        var name_1 = myImage.name;
        console.log(name_1);
        var fileExtensionFile = name_1.lastIndexOf(".");
        var getFileExtension = name_1.substring(fileExtensionFile);
        var fileToSave = uuid_1.v4() + getFileExtension;
        console.log(path_1.default.join(__dirname, "../images/" + fileToSave));
        myImage.mv(path_1.default.join(__dirname, "../images/" + fileToSave));
        res.json({ message: "file save successfully" }).status(200);
    }
};
exports.default = addImage;
