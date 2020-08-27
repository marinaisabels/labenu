"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mission_1 = require("./Mission");
var FullTimeMission = /** @class */ (function (_super) {
    __extends(FullTimeMission, _super);
    function FullTimeMission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FullTimeMission;
}(Mission_1.Mission));
exports.FullTimeMission = FullTimeMission;
