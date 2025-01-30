"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = controller;
require("reflect-metadata");
const appRouter_1 = require("../../appRouter");
const router = appRouter_1.AppRouter.getInstance();
function controller(routePrefix) {
    return function (target) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata("path", target.prototype, key);
            if (path) {
                router.get(`${routePrefix}${path}`, routeHandler);
            }
        });
    };
}
