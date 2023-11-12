import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Skeleton.module.scss'
import type { CSSProperties } from 'react'
import { memo } from 'react'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const Skeleton = memo((props: SkeletonProps) => {
    const { className = '', height, width, border } = props

    const stylesSkeleton: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }

    return (
        <div
            className={classNames(styles.Skeleton, {}, [className])}
            style={stylesSkeleton}
        />
    )
})
