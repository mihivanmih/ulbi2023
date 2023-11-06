import React from 'react'
import type { ComponentStory } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Текст',
    text: 'lorem'
}

export const Error = Template.bind({})
Error.args = {
    title: 'Текст',
    text: 'lorem',
    theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Текст'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'lorem'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Текст',
    text: 'lorem'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Текст'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'lorem'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'lorem 1',
    text: 'lorem',
    size: TextSize.L
}

export const SizeM = Template.bind({})
SizeM.args = {
    title: 'lorem 1',
    text: 'lorem',
    size: TextSize.M
}

export const SizeS = Template.bind({})
SizeS.args = {
    title: 'lorem 1',
    text: 'lorem',
    size: TextSize.S
}
