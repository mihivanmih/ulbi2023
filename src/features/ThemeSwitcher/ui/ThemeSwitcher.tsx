import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { memo, useCallback } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon as Icondepreacted } from '@/shared/ui/deprecated/Icon'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

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
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Icon
                    Svg={ThemeIcon}
                    onClick={onToggleHandler}
                    className={styles.cursorPointer}
                />
            }
            off={
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onToggleHandler}
                    className={classNames(styles.ThemeSwitcher, {}, [
                        className,
                    ])}
                >
                    <Icondepreacted
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted
                    />
                </Button>
            }
        />
    )
})
