module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-project'
        : '/',
        devServer: {
            hot: true,
            open: true,
            port: 8081,
            host: '127.0.0.1',
            proxy:{
                '/api':{
                    target: 'http://175.24.202.153:9527/',
                    changeOrigin: true,
                    withCredentials: true,
                    secure: false,
                    ws: true,
                    pathRewrite: {'^/api': ''}
                },
            }
        }
}