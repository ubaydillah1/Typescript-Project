import "reflect-metadata";
import { AppRouter } from "../../appRouter";
const router = AppRouter.getInstance();

export function controller(routePrefix: string) {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    });
  };
}
