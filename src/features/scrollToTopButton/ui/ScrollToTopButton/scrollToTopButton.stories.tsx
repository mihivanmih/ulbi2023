import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ScrollToTopButton } from './scrollToTopButton'

export default {
    title: 'pages/scrollToTopButton',
    component: ScrollToTopButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof ScrollToTopButton> = (args: any) => (
    <ScrollToTopButton {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
