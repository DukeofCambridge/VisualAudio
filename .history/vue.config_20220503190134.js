module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-project'
        : '/',
        devServer: {
            hot: true,
            open: true,
            port: 8081,
            host: 
        }
}