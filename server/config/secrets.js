export default function () {
    // Find the appropriate database to connect to, default to localhost if not found.
    var config = require('../../etc/no-share.json');
    return {
        db: 'mongodb://redux:FeCtut@ds039175.mongolab.com:39175/redux',
        sessionSecret: 'random-session-string',
        google: {
            clientID: config.googleClientID,
            clientSecret: config.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        facebook: {
            clientID: config.facebookClientID,
            clientSecret: config.facebookClientSecret,
            callbackURL: "/auth/facebook/callback"
        }
    }
}();