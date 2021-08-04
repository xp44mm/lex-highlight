const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: 'lex-highlight.js',
        library: 'lexHighlight',
        libraryTarget: 'umd',
        globalObject: 'this',
    },

})
