import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Overlay.module.scss'
import { memo } from 'react'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
    const { className = '', onClick } = props

    return (
        <div
            className={classNames(styles.Overlay, {}, [className])}
            onClick={onClick}
        />
    )
})
