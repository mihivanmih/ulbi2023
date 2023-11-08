import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Avatar.module.scss'
import type { CSSProperties } from 'react'
import { useMemo } from 'react'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import UserIcon from '../../assets/icons/user-filled.svg'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar = (props: AvatarProps) => {
    const {
        className = '',
        src = 'https://mirtex.ru/wp-content/uploads/2023/04/unnamed.jpg',
        alt,
        size = 100,
        fallbackInverted,
    } = props

    const mods: Mods = {}

    const stylesInline = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    )

    const fallback = <Skeleton width={size} height={size} border={'50%'} />
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    )

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={stylesInline}
            alt={alt}
            className={classNames(styles.Avatar, mods, [className])}
        />
    )
}
