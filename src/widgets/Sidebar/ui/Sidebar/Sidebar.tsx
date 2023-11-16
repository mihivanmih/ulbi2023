import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/deprecated/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const SidebarItemsList = useSidebarItems()

    const itemList = useMemo(
        () =>
            SidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [SidebarItemsList, collapsed],
    )

    return (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        styles.SidebarRedesigned,
                        {
                            [styles.collapsedRedesigned]: collapsed,
                            test: true,
                            test2: false,
                        },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={styles.appLogo}
                    />
                    <VStack
                        role={'navigation'}
                        gap={'8'}
                        className={styles.items}
                    >
                        {itemList}
                    </VStack>
                    <div data-testid="sidebar-toogle" onClick={onToggle}>
                        <Icon className={styles.collapseBtn} Svg={ArrowIcon} />
                    </div>

                    <div className={styles.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher
                            short={collapsed}
                            className={styles.lang}
                        />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        styles.Sidebar,
                        {
                            [styles.collapsed]: collapsed,
                            test: true,
                            test2: false,
                        },
                        [className],
                    )}
                >
                    <Button
                        data-testid="sidebar-toogle"
                        onClick={onToggle}
                        className={styles.collapseBtn}
                        square
                        size={ButtonSize.L}
                        theme={ThemeButton.BACKGROUND}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <VStack
                        role={'navigation'}
                        gap={'8'}
                        className={styles.items}
                    >
                        {itemList}
                    </VStack>

                    <div className={styles.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher
                            short={collapsed}
                            className={styles.lang}
                        />
                    </div>
                </aside>
            }
        />
    )
})
