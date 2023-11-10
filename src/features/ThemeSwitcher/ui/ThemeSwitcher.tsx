import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { memo, useCallback } from 'react'
import { Theme } from '@/shared/const/theme'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    const dispatch = useAppDispatch()

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(
                saveJsonSettings({
                    theme: newTheme,
                }),
            )
        })
    }, [dispatch, toggleTheme])

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onToggleHandler}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})
