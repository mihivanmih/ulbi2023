import type { Mods } from '@/shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { memo, useEffect, useRef, useState } from 'react'
import { HStack } from '../Stack'
import { Text } from '../Text'
import { classNames } from '@/shared/lib/classNames/classNames'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>

type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
    label?: string
    size?: InputSize
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        placeholder,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
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
        [styles.readonly]: readonly,
        [styles.focused]: isFocused,
        [styles.widthAddonLeft]: Boolean(addonLeft),
        [styles.widthAddonRight]: Boolean(addonRight),
    }

    const input = (
        <div
            className={classNames(styles.InputWrapper, mods, [
                className,
                styles[size],
            ])}
        >
            <div className={styles.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                value={value}
                readOnly={readonly}
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

    if (label) {
        return (
            <HStack max gap={'8'}>
                <Text text={label} />
                {input}
            </HStack>
        )
    }

    return input
})
