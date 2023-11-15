import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { AppLoaderLayout } from './AppLoaderLayout'

export default {
    title: 'pages/AppLoaderLayout',
    component: AppLoaderLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof AppLoaderLayout> = (args: any) => (
    <AppLoaderLayout {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
