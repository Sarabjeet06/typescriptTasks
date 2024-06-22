function updateObject(obj, keys) {
    var result = {};
    keys.forEach(function (key) {
        result[key] = obj[key];
    });
    return result;
}
var obj = { a: 1, b: 'hello', c: true };
// const updated = updateObject(obj, ['b', 'world']); //will not work as type of key will not match
var updated = updateObject(obj, ['b', 'c']);
