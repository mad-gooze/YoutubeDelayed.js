import webpack from 'webpack';
import path from 'path';
import cssNext from 'postcss-cssnext';
import postCSSNested from 'postcss-nested';

const libraryName = 'youtube-delayed';

const inputFile = `${libraryName}-global.js`;
const outputFile = `${libraryName}.min.js`;
const paths = {
    src: path.join(__dirname, 'src'),
    bin: path.join(__dirname, 'bin')
};

const config = {
    entry: path.join(paths.src, inputFile),
    output: {
        path: paths.bin,
        filename: outputFile
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?minimize',
                    'postcss'
                ]
            },
            {
                test: /\.png$/,
                loader: 'url'
            },
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ]
    },
    postcss: () => [
        cssNext({
            autoprefixer: ['last 2 versions']
        }),
        postCSSNested()
    ]
};

module.exports = config;
