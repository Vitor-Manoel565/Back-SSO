import FacebookStrategys from 'passport-facebook';
import Passport from 'passport';
const FacebookStrategy = FacebookStrategys.Strategy;
const passport = Passport;


const FACEBOOK_APP_ID = "1147465239309646";
const FACEBOOK_APP_SECRET = "80423f9a17649ab49d1223ed597b2b8c";



passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;