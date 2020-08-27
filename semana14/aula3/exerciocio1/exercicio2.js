"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/";
var promise1 = axios_1["default"].get("https://jsonplaceholder.typicode.com/posts/1");
var promise2 = axios_1["default"].get("https://jsonplaceholder.typicode.com/posts/2");
var promise3 = axios_1["default"].get("https://jsonplaceholder.typicode.com/posts/3");
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
})["catch"](function (error) {
    console.error(error);
});
