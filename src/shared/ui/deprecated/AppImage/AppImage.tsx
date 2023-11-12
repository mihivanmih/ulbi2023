import { classNames } from '@/shared/lib/classNames/classNames'
import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react'

interface AppimageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
}

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const AppImage = memo((props: AppimageProps) => {
    const {
        className = '',
        src,
        alt = '',
        fallback,
        errorFallback,
        ...otherProps
    } = props

    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setHasError(true)
        }
    }, [src])

    if (isLoading && fallback) {
        return fallback
    }

    if (hasError && errorFallback) {
        return errorFallback
    }

    return (
        <img
            className={classNames('', {}, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    )
})
