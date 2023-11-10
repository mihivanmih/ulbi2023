import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ArticlePageGreeting } from './ArticlePageGreeting'

export default {
    title: 'pages/ArticlePageGreeting',
    component: ArticlePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof ArticlePageGreeting> = (args: any) => (
    <ArticlePageGreeting {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
