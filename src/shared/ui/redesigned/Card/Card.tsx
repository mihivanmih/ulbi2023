import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export type CardTheme = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardTheme
    max?: boolean
    padding?: CardPadding
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
}

export const Card = (props: CardProps) => {
    const {
        className = '',
        children,
        variant = 'normal',
        max,
        padding = '8',
        ...otherProps
    } = props

    const paddingClass = mapPaddingToClass[padding]

    return (
        <div
            className={classNames(
                styles.Card,
                {
                    [styles.max]: max,
                },
                [className, styles[variant], styles[paddingClass]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    )
}
