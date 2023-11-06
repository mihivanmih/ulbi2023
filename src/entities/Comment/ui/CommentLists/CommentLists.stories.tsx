import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { CommentLists } from './CommentLists'

export default {
    title: 'entities/Comment/CommentLists',
    component: CommentLists,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof CommentLists> = (args: any) => <CommentLists {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            user: { id: '1', username: 'Vasya' },
            text: 'Привет)',
            id: 'BtFJoJH'
        },
        {
            user: { id: '1', username: 'Pyt' },
            text: 'Мвахахахаххаа',
            id: 'CU317BS'
        }
    ]
}
Normal.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true
}
