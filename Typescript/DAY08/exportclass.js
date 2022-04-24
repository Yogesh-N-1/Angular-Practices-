"use strict";
exports.__esModule = true;
exports.add = exports.person = void 0;
var person = /** @class */ (function () {
    function person(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    person.prototype.display = function () {
        console.log("\n    id        :".concat(this.id, "\n    frist name:").concat(this.fname, "\n    last name :").concat(this.lname, "\n    "));
    };
    return person;
}());
exports.person = person;
function add(a, b) {
    return a + b;
}
exports.add = add;
