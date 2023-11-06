import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'pages/Article/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args: any) =>
    <ArticleDetailPageHeader {...args} />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({

})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({

})]
