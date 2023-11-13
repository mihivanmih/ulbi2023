import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ArticlesFilters } from './ArticlesFilters'

export default {
    title: 'pages/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof ArticlesFilters> = (args: any) => (
    <ArticlesFilters {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
