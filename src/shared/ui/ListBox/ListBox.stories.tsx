import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story: any) => <div style={{ padding: '100px' }}><Story/></div>
    ]
}
const Template: ComponentStory<typeof ListBox> = (args: any) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '123', value: '123' }
    ]
}

export const topLeft = Template.bind({})
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '123', value: '123' }
    ]
}

export const topRight = Template.bind({})
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '123', value: '123' }
    ]
}

export const bottomRight = Template.bind({})
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '123', value: '123' }
    ]
}

export const bottomLeft = Template.bind({})
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: '123', value: '123' },
        { content: '123', value: '123' }
    ]
}
