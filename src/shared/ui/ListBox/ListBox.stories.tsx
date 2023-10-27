import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof ListBox> = (args: any) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {}
