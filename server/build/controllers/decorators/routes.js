"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.Get);
exports.post = routeBinder(Methods_1.Methods.Post);
exports.put = routeBinder(Methods_1.Methods.Put);
exports.del = routeBinder(Methods_1.Methods.Del);
exports.patch = routeBinder(Methods_1.Methods.Patch);
