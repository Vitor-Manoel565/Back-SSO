import CookieSession from "cookie-session";
import Express from "express";
import Cors from "cors";
import PassportSetup  from "./passport.js";
import Passport from "passport";
import AuthRoutes from "./routes/auth.js";


const cookieSession = CookieSession;
const cors = Cors;
const passportSetup = PassportSetup;
const authRoute = AuthRoutes;
const passport = Passport;
const app = Express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});