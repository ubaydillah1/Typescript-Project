"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = controller;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const router = AppRouter_1.AppRouter.getInstance();
const MetadataKeys_1 = require("./MetadataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid Request");
            return;
        }
        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send("Missing property : " + key);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Path, target.prototype, key);
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Middleware, target.prototype, key) ||
                [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Validator, target.prototype, key) ||
                [];
            const validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        });
    };
}
