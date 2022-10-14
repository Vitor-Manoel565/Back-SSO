import passport from "passport";
import FacebookStrategy from "passport-facebook"; 
const FacebookStrategy = FacebookStrategy().Strategy;

const FACEBOOK_ID = "YOUR_FACEBOOK_ID";
const FACEBOOK_SECRET = "YOUR_FACEBOOK_SECRET";
const passport_setup = passport();

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});


export default passport_setup;