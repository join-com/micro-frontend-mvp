// next.config.js
const withTypescript = require('@zeit/next-typescript')

const withSystemJS = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      // config.module.rules = config.module.rules.map((rule) => ({
      //   ...rule,
      //   parser: {
      //     ...rule.parser,
      //     system: false,
      //   },
      // }))

      config.module.rules.push({ parser: { system: false } })

      if (nextConfig.webpack) {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  }
}

module.exports = withSystemJS(withTypescript())
