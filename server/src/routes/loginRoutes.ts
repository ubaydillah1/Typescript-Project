import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403);
  res.send("Not Permitted");
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email"/>
            </div>

            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === "ubay@gmail.com" &&
    password === "password"
  ) {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid Email or Password");
  }
});

router.get("/", (req: Request, res: Response) => {
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
            <a href="/login">Login</a>
        </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route");
});

export { router };
