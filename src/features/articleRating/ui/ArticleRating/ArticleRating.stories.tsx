import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { ArticleRating } from './ArticleRating'

export default {
    title: 'pages/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof ArticleRating> = (args: any) => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
