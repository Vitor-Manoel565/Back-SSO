import Express from "express";
// import cookieSession from "cookie-session";
// import Passport from "passport";
// import cors from "cors";
// import authRoutes from "./routes/auth.js";
// import passportSetup from "./config/passport_setup.js";
// const passports = passportSetup();

const App = Express();
// const cookieSessions = cookieSession();
const PORT = 5000;
// const passport = Passport();

App.get("/", (request, resolve) => {
  res.send("Hello World!");
});

App.listen(PORT, () => {
  console.log("Server running!");
});

// App.use(
//   cookieSessions({
//     name: "session",
//     keys: ["key1", "key2"],
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//   })
// );

// App.use(passport.initialize());
// App.use(passport.session());

// App.use(
//   cors({
//     origin: "http://localhost:3000", // allow to server to accept request from different origin
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // allow session cookie from browser to pass through
//   })
// );


// App.use("/auth", authRoutes);
