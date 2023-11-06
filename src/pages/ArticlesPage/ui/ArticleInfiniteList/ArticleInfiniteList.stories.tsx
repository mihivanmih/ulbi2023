import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleInfiniteList } from './ArticleInfiniteList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'pages/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof ArticleInfiniteList> = (args: any) => <ArticleInfiniteList {...args} />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({

})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({

})]
