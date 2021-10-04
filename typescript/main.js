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
var A = /** @class */ (function () {
    function A(name) {
        this.full_name = name;
    }
    A.prototype.greet = function () {
        console.log("Hello " + this.full_name + " from " + A.company);
    };
    // class attribute
    A.company = 'TCS';
    return A;
}());
// let emp = new A('Amit Pal')
// emp.greet()
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    B.prototype.message = function () {
        console.log(this.full_name + " age is " + this.age + " and I work in " + A.company);
        _super.prototype.greet.call(this);
    };
    return B;
}(A));
var b = new B('gandu', 23);
b.message();
