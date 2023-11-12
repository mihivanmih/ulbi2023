import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(
    ({ className = '', short }: LangSwitcherProps) => {
        const { t, i18n } = useTranslation()

        const toggle = () => {
            void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }

        return (
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={
                    <Button
                        className={classNames(styles.LangSwitcher, {}, [
                            className,
                        ])}
                        variant={'clear'}
                        onClick={toggle}
                    >
                        {short ? t('RU') : t('Язык')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        className={classNames(styles.LangSwitcher, {}, [
                            className,
                        ])}
                        theme={ThemeButton.CLEAR}
                        onClick={toggle}
                    >
                        {short ? t('ru') : t('Язык')}
                    </ButtonDeprecated>
                }
            />
        )
    },
)
