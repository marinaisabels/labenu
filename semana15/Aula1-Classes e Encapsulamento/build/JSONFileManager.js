"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeInJSON(createAccountBank) {
        fs.writeFileSync(this.fileName, JSON.stringify(createAccountBank, null, 2));
    }
    getObjectFromJSON() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map