import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '../../../../entities/User'
import MainIconDeprecated from '@/shared/assets/icons/main20x20.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about20x20.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20x20.svg'
import ArticlesDeprecated from '@/shared/assets/icons/article-20-20.svg'

import MainIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'

import type { SideBarItemType } from '../types/sidebar'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SideBarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedisigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedisigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О сайте',
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedisigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedisigned',
                    off: () => ArticlesDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
