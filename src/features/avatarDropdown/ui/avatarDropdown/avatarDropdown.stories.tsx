import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { avatarDropdown as AvatarDropdown } from './avatarDropdown'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
    title: 'features/avatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof AvatarDropdown> = (args: any) => (
    <AvatarDropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
