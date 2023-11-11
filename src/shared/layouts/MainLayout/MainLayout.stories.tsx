import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { MainLayout } from './MainLayout'

export default {
    title: 'pages/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof MainLayout> = (args: any) => (
    <MainLayout {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
