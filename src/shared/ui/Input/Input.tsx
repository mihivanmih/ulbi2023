import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import type { InputHTMLAttributes } from 'react'
import { memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    type?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        placeholder,
        type = 'text',
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(styles.Input, {}, [className!])}>
            { placeholder && (<div className={styles.placeholder} >
                {`${placeholder}>`}
            </div>)}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={styles.input}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                { isFocused && (<span
                    className={styles.caret}
                    style={{ left: `${caretPosition * 9}px` }}
                />)}
            </div>
        </div>
    )
})
