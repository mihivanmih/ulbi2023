import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './NotificationItem.module.scss'
import { memo } from 'react'
import { Notification } from '../../model/types/notification'
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className = '', item } = props

    const content = (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Card
                    className={classNames(styles.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text text={item.description} title={item.title} />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(styles.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        text={item.description}
                        title={item.title}
                    />
                </CardDeprecated>
            }
        />
    )

    return item.href ? (
        <a target={'_blank'} className={styles.link}>
            {content}
        </a>
    ) : (
        content
    )
})
