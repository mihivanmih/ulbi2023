import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
    max?: boolean
}

export const Card = (props: CardProps) => {
    const {
        className = '',
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(styles.Card, { [styles.max]: max }, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
