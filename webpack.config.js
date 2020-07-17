var path = require("path");
var postcssPresetEnv = require("postcss-preset-env");


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
                // For pure CSS - /\.css$/i,
                // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
                // For Less - /\.((c|le)ss)$/i,
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                    // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                    // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                    importLoaders: 2,
                    // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
                    modules: { auto: true },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
                },
                // Can be `less-loader`
                {
                    loader: 'sass-loader',
                },
                ],
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000
    }
    
}