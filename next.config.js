
const webpack = require('webpack')

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
}

const withSass = require('@zeit/next-sass')
module.exports = withSass({
	sassLoaderOptions: {
		includePaths: ["static/scss"]
	}
})
