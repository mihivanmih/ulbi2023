import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from '@/shared/assets/icons/theme-light.svg?react'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { memo } from 'react'
import { Theme } from '@/shared/const/theme'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
        </Button>
    )
})
