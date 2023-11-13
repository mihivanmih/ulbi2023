import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './AppLogo.module.scss'
import { memo } from 'react'
import { HStack } from '../Stack'
import AppSvg from '@/shared/assets/icons/app-image.svg'

interface AppLogoProps {
    className?: string
    size?: number
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className = '', size = 50 } = props

    return (
        <HStack
            max
            justify="center"
            className={classNames(styles.appLogoWrapper, {}, [className])}
        >
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
            <AppSvg
                className={styles.appLogo}
                width={size}
                height={size}
                color={'black'}
            />
        </HStack>
    )
})
