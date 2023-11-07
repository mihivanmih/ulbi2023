import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '../../../../entities/User'
import MainIcon from '@/shared/assets/icons/main20x20.svg'
import AboutIcon from '@/shared/assets/icons/about20x20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20x20.svg'
import Articles from '@/shared/assets/icons/article-20-20.svg'
import type { SideBarItemType } from '../types/sidebar'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getUserAuthData, (userData) => {
        const sidebarItemsList: SideBarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    Icon: Articles,
                    text: 'Статьи',
                    authOnly: true
                }
            )
        }

        return sidebarItemsList
    }
)
