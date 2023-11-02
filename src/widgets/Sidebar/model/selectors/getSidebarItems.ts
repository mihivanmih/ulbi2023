import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '../../../../entities/User'
import { RoutePath } from '@/shared/config/roteConfig/routeConfig'
import MainIcon from '@/shared/assets/icons/main20x20.svg?react'
import AboutIcon from '@/shared/assets/icons/about20x20.svg?react'
import ProfileIcon from '@/shared/assets/icons/profile-20x20.svg?react'
import Articles from '@/shared/assets/icons/article-20-20.svg?react'
import type { SideBarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData, (userData) => {
        const sidebarItemsList: SideBarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    Icon: Articles,
                    text: 'Статьи',
                    authOnly: true
                }
            )
        }

        return sidebarItemsList
    }
)
