import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { DetailsContainer } from './DetailsContainer'

export default {
    title: 'pages/DetailsContainer',
    component: DetailsContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof DetailsContainer> = (args: any) => (
    <DetailsContainer {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
