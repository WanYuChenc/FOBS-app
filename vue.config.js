module.exports = {
    configureWebpack:{
        experiments: {
            topLevelAwait: true,
        }
    },
    devServer: {
        host: 'localhost',
        port: '9090',
        open: true,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    }
}