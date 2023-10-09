import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: string
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = '',
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean | undefined> = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled
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
}
