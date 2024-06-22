function loggerWrapper(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling function ".concat(fn.name, " with arguements: ").concat(JSON.stringify(args)));
        var result = fn.apply(void 0, args);
        console.log("Function ".concat(fn.name, " returned ").concat(JSON.stringify(result)));
        return result;
    };
}
var add = function (a, b) {
    return a + b;
};
var loggedAdd = loggerWrapper(add);
var value = loggedAdd(3, 5);
