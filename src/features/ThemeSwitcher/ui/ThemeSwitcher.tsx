import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import TheneIcon from '@/shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { memo, useCallback } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon } from '@/shared/ui/Icon'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()
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
            <Icon Svg={TheneIcon} width={40} height={40} inverted />
        </Button>
    )
})
