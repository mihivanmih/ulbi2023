import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import type { MutableRefObject, ReactNode, UIEvent } from 'react'
import { useRef } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUIScrollByPath, uiActions } from '@/features/UI'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestsProps } from '@/shared/types/tests'
import { toggleFeatures } from '@/shared/lib/features'

interface PageProps extends TestsProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID'

export const Page = (props: PageProps) => {
    const { className = '', children, onScrollEnd } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()

    useInfiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedisigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        callback: onScrollEnd,
    })

    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    )
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        )
    }, 500)

    return (
        <main
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedisigned',
                    on: () => styles.PageRedesigned,
                    off: () => styles.Page,
                }),
                {},
                [className],
            )}
            ref={wrapperRef}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={props['data-testid'] ?? ['Page']}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={styles.trigger} />
            ) : null}
        </main>
    )
}
