import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Overlay.module.scss'
import { memo } from 'react'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const Overlay = memo((props: OverlayProps) => {
    const { className = '', onClick } = props

    return (
        <div
            className={classNames(styles.Overlay, {}, [className])}
            onClick={onClick}
        />
    )
})
