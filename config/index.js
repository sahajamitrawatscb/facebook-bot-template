const config = {
  development: {
    token: 'xxxxxxxxx',
    verify: 'greatestbotonearth',
    app_secret: 'xxxxxx'
  },
  production: {
    token: process.env.facebook_token,
    verify: process.env.verification_token,
    app_secret: process.env.facebook_app_secret
  },
}

module.exports = config;