var path = require("path");


module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: ['source-map-loader'],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000
    }
    
}