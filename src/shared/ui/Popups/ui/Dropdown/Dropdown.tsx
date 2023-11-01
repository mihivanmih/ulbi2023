import { Menu } from '@headlessui/react'
import styles from './Dropdown.module.scss'
import { classNames } from '../../../../lib/classNames/classNames'
import type { ReactNode } from 'react'
import { Fragment } from 'react'
import type { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

export function Dropdown (props: DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right'
    } = props
    const menuClasses = [mapDirectionClass[direction]]

    return (
        <Menu as={'div'} className={classNames(styles.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button
                className={popupCls.trigger}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(styles.item, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} disabled={item.disabled} to={item.href} key={item.href}>
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
