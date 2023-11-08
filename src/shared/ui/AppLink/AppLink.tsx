import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { memo } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
    children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className = '',
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
