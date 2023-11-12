import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { AppLink } from './AppLink'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
}

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Текст',
    variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Текст',
    variant: 'secondary',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Текст',
    variant: 'secondary',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Текст',
    variant: 'secondary',
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
