import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import type { BuildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        localesIcons: path.resolve(__dirname, 'public', 'icons'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        buildIcons: path.resolve(__dirname, 'build', 'icons'),
    }

    const mode = env?.mode || 'development'
    const PORT = env?.port || 3000
    const apiUrl = env?.apiUrl || 'http://localhost:8000'

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    })

    return config
}
