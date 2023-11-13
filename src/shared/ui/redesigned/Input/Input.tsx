import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>

export enum TypeButton {
    TEXT = 'text',
    NUMBER = 'number',
}

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readOnly?: boolean
    type?: TypeButton
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        placeholder,
        readOnly,
        type = TypeButton.TEXT,
        addonLeft,
        addonRight,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const mods: Mods = {
        [styles.readonly]: readOnly,
        [styles.focused]: isFocused,
        [styles.widthAddonLeft]: Boolean(addonLeft),
        [styles.widthAddonRight]: Boolean(addonRight),
    }

    return (
        <div className={classNames(styles.InputWrapper, mods, [className!])}>
            <div className={styles.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                readOnly={readOnly}
                className={styles.input}
                onChange={onChangeHandler}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={styles.addonRight}>{addonRight}</div>
        </div>
    )
})
