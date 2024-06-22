"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transformKeys = function (user, _a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    user[firstName] = user.firstName;
    user[lastName] = user.lastName;
    delete user[user.firstName];
    delete user[user.lastName];
};
var user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
};
var transformUser = transformKeys(user, { firstName: "first", lastName: "last" });
console.log(user);
