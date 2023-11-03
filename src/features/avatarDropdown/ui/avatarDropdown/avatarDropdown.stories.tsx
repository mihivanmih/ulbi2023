import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { avatarDropdown as AvatarDropdown } from './avatarDropdown'

export default {
    title: 'features/avatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof AvatarDropdown> = (args: any) => <AvatarDropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
