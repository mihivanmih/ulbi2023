import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ScrollToolbar } from './ScrollToolbar'

export default {
    title: 'pages/ScrollToolbar',
    component: ScrollToolbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof ScrollToolbar> = (args: any) => (
    <ScrollToolbar {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
