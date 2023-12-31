import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Popover.module.scss'
import { Popover as HPopover } from '@headlessui/react'
import { ReactNode } from 'react'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export function Popover(props: PopoverProps) {
    const { className, trigger, children, direction = 'bottom right' } = props

    const menuClasses = [mapDirectionClass[direction], popupCls.menu]

    return (
        <HPopover
            className={classNames(styles.Popover, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <HPopover.Button as={'div'} className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(styles.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
