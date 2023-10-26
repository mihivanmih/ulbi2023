import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'
import { memo } from 'react'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ className = '', short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >{short ? t('ru') : t('Язык')}</Button>
    )
})
