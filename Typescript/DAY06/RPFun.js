//rest parameter funtion 
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("array is ".concat(item));
}
display(3, 34, 5, 5);
