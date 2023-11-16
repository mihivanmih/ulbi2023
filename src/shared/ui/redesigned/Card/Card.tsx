import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export type CardTheme = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24' | 'auto'
export type CardBorder = 'round' | 'border' | 'partial'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardTheme
    max?: boolean
    padding?: CardPadding
    paddingBottom?: CardPadding
    border?: CardBorder
    fullHeight?: boolean
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
    auto: 'gap_auto',
}

const mapPaddingBottomToClass: Record<CardPadding, string> = {
    '0': 'pb_0',
    '8': 'pb_8',
    '16': 'pb_16',
    '24': 'pb_24',
    auto: 'pb_auto',
}

export const Card = (props: CardProps) => {
    const {
        className = '',
        children,
        variant = 'normal',
        max,
        fullHeight,
        padding = '8',
        paddingBottom = 'auto',
        border = 'normal',
        ...otherProps
    } = props

    const paddingClass = mapPaddingToClass[padding]
    const paddingClassBottom = mapPaddingBottomToClass[paddingBottom]

    return (
        <div
            className={classNames(
                styles.Card,
                {
                    [styles.max]: max,
                    [styles.fullHeight]: fullHeight,
                },
                [
                    className,
                    styles[variant],
                    styles[paddingClass],
                    styles[paddingClassBottom],
                    styles[border],
                ],
            )}
            {...otherProps}
        >
            {children}
        </div>
    )
}
