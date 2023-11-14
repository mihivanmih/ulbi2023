import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleAdditionalInfo.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { User } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'

interface ArticleAdditionalInfoProps {
    className?: string
    author: User
    createAt: string
    views: number
    onEdit: () => void
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className = '', author, views, createAt, onEdit } = props

        const { t } = useTranslation()

        const textCiew = t('просмотров: ') + views
        return (
            <VStack
                gap={'32'}
                className={classNames(styles.ArticleAdditionalInfo, {}, [
                    className,
                ])}
            >
                <HStack gap={'8'}>
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                    <Text text={createAt} />
                </HStack>
                <Button onClick={onEdit}>{t('Редактировать')}</Button>
                {/* <Text text={t('{{count}} просмотров', { count: views })} /> */}
                <Text text={textCiew} />
            </VStack>
        )
    },
)
