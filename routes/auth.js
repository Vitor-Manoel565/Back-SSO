import Router from "express";
import passport from "passport";

const router = Router();

const CLIENTE_URL = "http://localhost:3000";

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);
router.get("/auth/facebook/sucess", (request, resolve) => {
  if (req.user) {
    res.status(200).json({
      message: "User logged in",
      user: request.user,
      success: true,
      cookies: request.cookies,
    });
  }
});

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    router.get(
      "/auth/facebook/callback",
      passport.authenticate("facebook", {
        successRedirect: CLIENTE_URL,
        failureRedirect: "auth/login/failed",
      })
    );
  }
);

router.get("/login/falied", (request, resolve) => {
  resolve.status(401).json({
    success: false,
    message: "user failed to authenticate",
  });
});

router.get("/logout", (request, resolve) => {
  request.logout();
  resolve.redirect(CLIENTE_URL);
});

export default router;