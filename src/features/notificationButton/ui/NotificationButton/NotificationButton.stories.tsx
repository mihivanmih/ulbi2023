import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { NotificationButton } from './NotificationButton'

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof NotificationButton> = (args: any) => <NotificationButton {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
