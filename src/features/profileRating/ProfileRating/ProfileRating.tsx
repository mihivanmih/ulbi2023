import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ProfileRating.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useProfileRating, useRateProfile } from '../api/profileRatingApi'

export interface ProfileRatingProps {
    className?: string
    profileId: string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className = '', profileId } = props
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useProfileRating({
        userId: userData?.id ?? '',
        profileId,
    })
    const [rateProfileMutation] = useRateProfile()
    const rating = data?.[0]

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                })
            } catch (e) {
                console.log(e)
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback)
        },
        [handleRateProfile],
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount)
        },
        [handleRateProfile],
    )

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={classNames(styles.ProfileRating, {}, [className])}
            title={t('Оцените профиль')}
            feedbackTitle={t('оставьте свой отзыв о профиль')}
            hasFeedback
            rate={rating?.rate}
        />
    )
})

export default ProfileRating
