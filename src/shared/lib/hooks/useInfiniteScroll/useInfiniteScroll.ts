import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll (props: UseInfiniteScrollOptions) {
    const {
        callback,
        wrapperRef,
        triggerRef
    } = props

    useEffect(() => {
        let observer: IntersectionObserver | null = null

        const wrapperElement = wrapperRef.current
        const triggerElement = triggerRef.current

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0
            }
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(triggerRef.current)
        }

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement)
            }
        }
    }, [callback, triggerRef, wrapperRef])
}
