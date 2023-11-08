import React from 'react'
import type { ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Input } from './Input'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
    value: 'Текст',
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]
