var myClass = /** @class */ (function () {
    function myClass(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    myClass.prototype.display = function () {
        console.log("\nid        :".concat(this.id, "\nfrist name:").concat(this.fname, "\nlast name :").concat(this.lname, "\n"));
    };
    return myClass;
}());
var v = new myClass(3, 'yog', 'nik');
v.display();
