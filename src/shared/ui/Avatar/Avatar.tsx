import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'
import type { CSSProperties } from 'react'
import { useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className = '',
        src = 'https://mirtex.ru/wp-content/uploads/2023/04/unnamed.jpg',
        alt,
        size
    } = props

    const mods: Mods = {}

    const stylesInline = useMemo<CSSProperties>(() => ({
        width: size ?? 100,
        height: size ?? 100
    }), [size])

    return (
        <img
            src={src}
            style={stylesInline}
            alt={alt}
            className={classNames(styles.Avatar, mods, [className])} />
    )
}
