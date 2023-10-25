import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader'

export default {
    title: 'pages/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args: any) =>
    <ArticleDetailPageHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
