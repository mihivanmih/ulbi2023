import type { Mods } from 'shared/lib/classNames/classNames'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'
import type { ChangeEvent } from 'react'
import { memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className = '',
        label,
        options,
        value,
        onChange,
        readonly
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option value={opt.value} key={opt.value}>{opt.content}</option>
        ))
    }, [options])

    const mods: Mods = {

    }

    return (
        <div className={classNames(styles.Select, mods, [className])}>
            { label && <label className={styles.label} >{`${label}>`}</label>}
            <select className={styles.select} name="" id="" value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    )
})
