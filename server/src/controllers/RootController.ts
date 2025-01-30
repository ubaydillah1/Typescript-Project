import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403);
  res.send("Not Permitted");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
                      <div>
                          <div>You are login</div>
                          <a href="/logout">Logout</a>
                      </div>
                  `);
    } else {
      res.send(`
              <div>
                  <div>You are not login</div>
                  <a href="/auth/login">Login</a>
              </div>
          `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to protected route");
  }
}
