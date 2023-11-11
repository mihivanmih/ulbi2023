import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { AppLogo } from './AppLogo'

export default {
    title: 'pages/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof AppLogo> = (args: any) => (
    <AppLogo {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
