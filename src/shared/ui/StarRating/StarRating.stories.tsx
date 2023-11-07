import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { StarRating } from './StarRating'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
    title: 'pages/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof StarRating> = (args: any) => <StarRating {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
