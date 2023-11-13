import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'

export type ThemeButton = 'clear' | 'outline' | 'filled'
export type ButtonSize = 'm' | 'l' | 'xl'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    variant?: ThemeButton
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean
    /**
     * Содержимое кнопки
     */
    children?: ReactNode
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = '',
        children,
        variant = 'outline',
        square,
        disabled,
        size = 'm',
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props

    const mods: Mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
        [styles.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    }

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [
                className,
                styles[variant],
                styles[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            <div className={styles.addonLeft}>{addonLeft}</div>
            {children}
            <div className={styles.addonRight}>{addonRight}</div>
        </button>
    )
})
