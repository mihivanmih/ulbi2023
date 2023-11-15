import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Tabs } from './Tabs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'shared/TabsDeprecated',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof Tabs> = (args: any) => <Tabs {...args} />

export const Normal = Template.bind({})
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
}
