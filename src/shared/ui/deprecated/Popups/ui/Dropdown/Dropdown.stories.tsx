import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof Dropdown> = (args: any) => (
    <Dropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    trigger: <button>Open</button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
}
