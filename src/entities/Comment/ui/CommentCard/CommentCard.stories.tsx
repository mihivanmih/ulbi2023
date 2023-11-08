import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { CommentCard } from './CommentCard'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof CommentCard> = (args: any) => (
    <CommentCard {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    comment: {
        user: { id: '1', username: 'Vasya' },
        text: 'Привет)',
        id: 'BtFJoJH',
    },
}
Normal.decorators = [ThemeDecorator(Theme.DARK)]

export const isLoading = Template.bind({})
isLoading.args = {
    comment: {
        user: { id: '1', username: 'Vasya' },
        text: 'Привет)',
        id: 'BtFJoJH',
    },
    isLoading: true,
}
isLoading.decorators = [ThemeDecorator(Theme.DARK)]
