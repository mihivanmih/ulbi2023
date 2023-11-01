import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotificationButton.module.scss'
import React, { memo } from 'react'
import { Popover } from 'shared/ui/Popups'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className = ''
    } = props

    return (
        <Popover
            className={classNames(styles.NotificationButton, {}, [className])}
            direction={'bottom left'}
            trigger={(
                <Button theme={ThemeButton.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}>
            <NotificationList className={styles.notifications}/>
        </Popover>
    )
})
