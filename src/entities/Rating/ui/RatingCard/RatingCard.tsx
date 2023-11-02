import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Card } from '@/shared/ui/Card/Card'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className = '',
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept
    } = props

    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    )

    return (
        <Card className={classNames(styles.RatingCard, {}, [className])}>
            <VStack align={'center'} gap={'8'}>
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars}/>
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack max gap={'32'}>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={acceptHandle}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={cancelHandle}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack max gap={'32'}>
                        {modalContent}
                        <Button fullWidth size={ButtonSize.L} onClick={acceptHandle}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>

        </Card>
    )
})
