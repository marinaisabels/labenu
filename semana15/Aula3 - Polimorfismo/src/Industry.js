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
var Place_1 = require("./Place");
var Industry = /** @class */ (function (_super) {
    __extends(Industry, _super);
    function Industry(machinesQuantity, 
    // Refere-se à quantidade de máquinas do local 
    cep) {
        var _this = _super.call(this, cep) || this;
        _this.machinesQuantity = machinesQuantity;
        return _this;
    }
    return Industry;
}(Place_1.Place));
exports.Industry = Industry;
