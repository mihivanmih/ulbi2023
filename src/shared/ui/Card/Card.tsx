import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card = (props: CardProps) => {
    const {
        className = '',
        children,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(styles.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
