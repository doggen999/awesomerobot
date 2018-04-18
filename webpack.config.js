const path = require('path');

module.exports = {
    entry: './src/app.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    }, 
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'jest']
                    }
                }
            }
        ]
    }
}