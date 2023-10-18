import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

const Template: ComponentStory<typeof Skeleton> = (args: any) => <Skeleton {...args}/>

export const Normal = Template.bind({})
Normal.args = {
    width: '100%',
    height: 400
}

export const Circle = Template.bind({})
Circle.args = {
    border: '50%',
    width: 100,
    height: 100
}

export const NormalDark = Template.bind({})
NormalDark.args = {
    width: '100%',
    height: 400
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
