import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotificationItem.module.scss'
import { memo } from 'react'
import { Notification } from '../../model/types/notification'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className = '',
        item
    } = props

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(styles.NotificationItem, {}, [className])}
        >
            <Text text={item.description} title={item.title} />
        </Card>
    )

    return item.href
        ? (<a target={'_blank'} className={styles.link}>{content}</a>)
        : content
})
