import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './UiDesignSwitcher.module.scss'
import { memo, useState } from 'react'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'

interface UiDesignSwitcherProps {
    className?: string
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props
    const { t } = useTranslation()
    const isAppRedesigned = getFeatureFlag('isAppRedisigned')
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const [isLoading, setIsLoading] = useState(false)
    const forceUpdate = useForceUpdate()

    const items = [
        {
            content: t('Новый'),
            value: t('new'),
        },
        {
            content: t('Старый'),
            value: t('old'),
        },
    ]

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true)
            await dispatch(
                updateFeatureFlag({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedisigned: value === 'new',
                    },
                }),
            ).unwrap()
            setIsLoading(false)
            forceUpdate()
        }
    }

    return (
        <HStack>
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={100} height={400} />
            ) : (
                <ListBox
                    onChange={onChange}
                    items={items}
                    value={isAppRedesigned ? 'new' : 'old'}
                    className={classNames(styles.UiDesignSwitcher, {}, [
                        className,
                    ])}
                />
            )}
        </HStack>
    )
})
