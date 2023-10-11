import type React from 'react'
import { RoutePath } from 'shared/config/roteConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about20x20.svg'
import MainIcon from 'shared/assets/icons/main20x20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20x20.svg'

export interface SideBarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль'
    }
]