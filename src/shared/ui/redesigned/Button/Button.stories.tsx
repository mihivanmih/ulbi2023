import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Button } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    variant: 'clear',
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'Текст',
    variant: 'clear',
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    variant: 'outline',
}

export const OutlineDarck = Template.bind({})
OutlineDarck.args = {
    children: 'Text',
    variant: 'outline',
}
OutlineDarck.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    children: 'Текст',
    variant: 'outline',
    size: 'l',
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    children: 'Текст',
    variant: 'outline',
    size: 'xl',
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: '>',
    variant: 'outline',
    disabled: true,
}
