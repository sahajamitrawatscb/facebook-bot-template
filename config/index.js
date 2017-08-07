const config = {
  development: {
    token: 'EAABiYReOVi4BAHB0KvhbFhZBRaygkwrZA1x9mORQZBBwcR35fEe5QLFWFlRpP6PBDjbc6Yv7cPHu9ss0YmsrXZBhRZBbM1dEsYWkD3DYwyYbB33CQuQGqBhPSPwxNAZCoXQuMTUZAsXcmbatpUgrbKdySN2l28kwphJ9pmd2HZA0jQZDZD',
    verify: 'greatestbotonearth',
    app_secret: '2831c9328f062dc6ac8e2399c98b486f'
  },
  production: {
    token: process.env.facebook_token,
    verify: process.env.verification_token,
    app_secret: process.env.facebook_app_secret
  },
}

module.exports = config;