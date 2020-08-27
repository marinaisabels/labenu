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
var NightMission = /** @class */ (function (_super) {
    __extends(NightMission, _super);
    function NightMission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NightMission.prototype.setName = function (name) {
        if (name.indexOf("-na-night") !== -1) {
            _super.prototype.setName.call(this, name);
        }
    };
    return NightMission;
}(Mission_1.Mission));
exports.NightMission = NightMission;
