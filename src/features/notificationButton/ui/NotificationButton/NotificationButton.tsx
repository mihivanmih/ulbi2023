import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './NotificationButton.module.scss'
import React, { memo, useCallback, useState } from 'react'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { NotificationList } from '@/entities/Notification'
import NotificationIconIconDeprecated from '@/shared/assets/icons/notification-20-20.svg'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className = '' } = props

    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ThemeButton.CLEAR}
                >
                    <IconDeprecated
                        Svg={NotificationIconIconDeprecated}
                        inverted
                    />
                </ButtonDeprecated>
            }
        />
    )

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={
                        <Popover
                            className={classNames(
                                styles.NotificationButton,
                                {},
                                [className],
                            )}
                            direction={'bottom left'}
                            trigger={trigger}
                        >
                            <NotificationList
                                className={styles.notifications}
                            />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(
                                styles.NotificationButton,
                                {},
                                [className],
                            )}
                            direction={'bottom left'}
                            trigger={trigger}
                        >
                            <NotificationList
                                className={styles.notifications}
                            />
                        </PopoverDeprecated>
                    }
                />
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
