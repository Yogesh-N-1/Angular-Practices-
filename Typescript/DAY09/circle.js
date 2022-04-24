"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.circle = void 0;
var shape_1 = require("./shape");
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(r) {
        var _this = _super.call(this) || this;
        _this.radius = r;
        _this.area = 0;
        return _this;
    }
    circle.prototype.Myarea = function () {
        this.area = 3.14 * this.radius * this.radius;
    };
    circle.prototype.Display = function () {
        console.log("\n        redius ::".concat(this.radius, "\n        area   ::").concat(this.area, "\n        "));
    };
    return circle;
}(shape_1.shape));
exports.circle = circle;
