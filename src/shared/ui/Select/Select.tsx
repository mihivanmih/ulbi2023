import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Select.module.scss'
import type { ChangeEvent } from 'react'
import { useMemo } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOption<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
            onChange(e.target.value as T)
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
}
