import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from '../app/providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import React, { memo, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserInited, initAuthData } from '@/entities/User'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ToggleFeatures } from '@/shared/lib/features'
import { PageLoader } from '@/widgets/PageLoader'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout/AppLoaderLayout'
import { useAppToolbar } from './lib/useAppToolbar'
import { withTheme } from './providers/ThemeProvider/ui/withTheme'

const App = memo(function App() {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited)
    const toolbar = useAppToolbar()

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData())
        }
    }, [dispatch, inited])

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedisigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />{' '}
                    </div>
                }
                off={<PageLoader />}
            />
        )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className={'content-page'}>
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
        />
    )
})
export default withTheme(App)
