import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useEffect, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Text } from '@/shared/ui/Text'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { isMobile } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer'

interface ArticlePageGreetingProps {
    className?: string
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { className = '' } = props

    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const { isArticlePageWasOpened } = useJsonSettings()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true)
            dispatch(
                saveJsonSettings({
                    isArticlePageWasOpened: true,
                }),
            )
        }
    }, [dispatch, isArticlePageWasOpened])

    const onClose = () => {
        setIsOpen(false)
    }

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    )

    if (isMobile) {
        return <Drawer>{text}</Drawer>
    }

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            {text}
        </Modal>
    )
})
