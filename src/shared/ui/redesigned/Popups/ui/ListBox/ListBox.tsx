import type { ReactNode } from 'react'
import { Fragment, useMemo } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import styles from './ListBox.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../../redesigned/Stack'
import type { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    items?: Array<ListBoxItem<T>>
    className?: string
    value?: T
    defaultValue?: string
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label,
    } = props
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu]

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value)
    }, [items, value])

    return (
        <HStack gap={'4'}>
            {label && <span>{label + '> '}</span>}
            <HListbox
                disabled={readonly}
                value={value}
                onChange={onChange}
                as={'div'}
                className={classNames('', {}, [className, popupCls.popup])}
            >
                <HListbox.Button className={styles.trigger}>
                    <Button variant={'filled'} disabled={readonly}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(styles.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(styles.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
