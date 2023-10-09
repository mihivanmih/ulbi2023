import type webpack from 'webpack'
import type { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import type { RuleSetRule } from 'webpack'
import {DefinePlugin} from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    if (config.resolve) {
        if (config.resolve.modules) {
            config.resolve.modules.unshift(paths.src)
        }
        if (config.resolve.extensions) {
            config.resolve.extensions.push('.ts', '.tsx')
        }
    }

    if (config.module) {
        if (config.module.rules) {
            config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i }
                }
                return rule
            })
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack']
            })
            config.module.rules.push(buildCssLoader(true))
        }
    }

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    return config
}
