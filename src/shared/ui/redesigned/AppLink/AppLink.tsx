import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { memo } from 'react'

export type AppLinkVariant = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
    children?: ReactNode
    activeClassName?: string
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className = '',
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames('', { [activeClassName]: isActive }, [
                    className,
                    styles[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    )
})
