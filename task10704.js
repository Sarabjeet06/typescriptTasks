var reverseTupple = function (arr) {
    var n = arr.length;
    console.log(arr);
    for (var i = 0; i < n / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
    console.log(arr);
};
var arr = [42, "num", false];
reverseTupple(arr);
