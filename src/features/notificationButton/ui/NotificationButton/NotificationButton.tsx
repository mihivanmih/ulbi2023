import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './NotificationButton.module.scss'
import React, { memo, useCallback, useState } from 'react'
import { Popover } from '@/shared/ui/Popups'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg?react'
import { Drawer } from '@/shared/ui/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className = ''
    } = props

    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(styles.NotificationButton, {}, [className])}
                    direction={'bottom left'}
                    trigger={trigger}>
                    <NotificationList className={styles.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>

    )
})
