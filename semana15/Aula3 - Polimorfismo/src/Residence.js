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
var Residence = /** @class */ (function (_super) {
    __extends(Residence, _super);
    function Residence(residentsQuantity, 
    // Refere-se ao número de moradores da casa
    cep) {
        var _this = _super.call(this, cep) || this;
        _this.residentsQuantity = residentsQuantity;
        return _this;
    }
    return Residence;
}(Place_1.Place));
exports.Residence = Residence;
