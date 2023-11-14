import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Code } from './Code'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof Code> = (args: any) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
    text:
        'export default {\n' +
        "    title: 'pages/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' }\n" +
        '    }\n' +
        '}',
}

export const Dark = Template.bind({})
Dark.args = {
    text:
        'export default {\n' +
        "    title: 'pages/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' }\n" +
        '    }\n' +
        '}',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
