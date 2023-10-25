import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ArticlesPage from './ArticlesPage'

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage/>

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
