import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { ToggleFeatures } from '@/shared/lib/features'
import { Input } from '@/shared/ui/redesigned/Input'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className = '',
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props

    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)
            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [hasFeedback, onAccept],
    )

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
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={
                    <>
                        <Text title={feedbackTitle} />
                        <Input
                            data-testid={'ArticleRating.Input'}
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                        />
                    </>
                }
                off={
                    <>
                        <TextDeprecated title={feedbackTitle} />
                        <InputDeprecated
                            data-testid={'ArticleRating.Input'}
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                        />
                    </>
                }
            />
        </>
    )

    const content = (
        <>
            <VStack align={'center'} gap={'8'} max>
                <ToggleFeatures
                    feature={'isAppRedisigned'}
                    on={
                        <Text
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                    }
                />

                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap={'32'}>
                        {modalContent}
                        <ToggleFeatures
                            feature={'isAppRedisigned'}
                            on={
                                <HStack max gap={'16'} justify={'end'}>
                                    <Button
                                        data-testid={
                                            'ArticleRating.Button.Close'
                                        }
                                        onClick={cancelHandle}
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testid={
                                            'ArticleRating.Button.Send'
                                        }
                                        onClick={acceptHandle}
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap={'16'} justify={'end'}>
                                    <ButtonDeprecated
                                        data-testid={
                                            'ArticleRating.Button.Close'
                                        }
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={cancelHandle}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid={
                                            'ArticleRating.Button.Send'
                                        }
                                        onClick={acceptHandle}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    <VStack max gap={'32'}>
                        {modalContent}
                        <ToggleFeatures
                            feature={'isAppRedisigned'}
                            on={
                                <Button
                                    fullWidth
                                    size={'l'}
                                    onClick={acceptHandle}
                                >
                                    {t('Отправить')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    fullWidth
                                    size={ButtonSize.L}
                                    onClick={acceptHandle}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    )

    return (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Card
                    data-testid={'RatingCard'}
                    max
                    padding={'24'}
                    border={'partial'}
                    className={classNames('', {}, [className])}
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid={'RatingCard'}
                    max
                    className={classNames(styles.RatingCard, {}, [className])}
                >
                    {content}
                </CardDeprecated>
            }
        />
    )
})
