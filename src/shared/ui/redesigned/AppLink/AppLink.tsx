import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { ForwardedRef, forwardRef } from 'react'

export type AppLinkVariant = 'primary' | 'secondary' | 'color'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
    children?: ReactNode
    activeClassName?: string
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
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
                ref={ref}
            >
                {children}
            </NavLink>
        )
    },
)
