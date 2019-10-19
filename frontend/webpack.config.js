const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['./src/app.js', './src/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Exoplanety w Hevelianum',
            template: './src/index.html',
            filename: './index.html',
            favicon: './src/assets/favicon.ico'
        }),
        new WebpackPwaManifest({
            fingerprints: false,
            name: 'Exoplanety w Hevelianum',
            short_name: 'Hevelianum',
            description: 'Hevelianum',
            background_color: '#fff',
            theme_color: '#fff',
            start_url: '/?utm_source=a2hs',
            display: 'standalone',
            ios: {
                'apple-mobile-web-app-status-bar-style': 'black'
            },
            icons: [{
                    src: path.resolve('src/assets/icon.png'),
                    destination: './icons/',
                    sizes: [96, 128, 192, 256, 384, 512],
                    ios: true
                },
                {
                    src: path.resolve('src/assets/icon.png'),
                    destination: './icons/',
                    size: 512,
                    ios: 'startup'
                }
            ]
        }),
        new WorkboxPlugin.GenerateSW({
            runtimeCaching: [{
                urlPattern: /.*/,
                handler: 'StaleWhileRevalidate'
			}]
        })
    ],
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                loader: "file-loader"
            }
        ]
    }
}