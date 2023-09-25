import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import type { FC } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
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
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
