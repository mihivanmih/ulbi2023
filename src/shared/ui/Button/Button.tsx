import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: string
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
    fullWidth?: boolean
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = '',
        children,
        theme = ThemeButton.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        fullWidth,
        ...otherProps
    } = props

    const mods: Mods = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth
    }

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
