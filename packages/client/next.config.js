const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'jesstest.cdn.content.amplience.net'
    },
    poweredByHeader: false,
}
