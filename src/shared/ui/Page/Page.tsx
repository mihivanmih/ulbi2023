import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import type { MutableRefObject, ReactNode } from 'react'
import { useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const {
        className = '',
        children,
        onScrollEnd
    } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section
            className={classNames(styles.Page, {}, [className])}
            ref={wrapperRef}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    )
}
