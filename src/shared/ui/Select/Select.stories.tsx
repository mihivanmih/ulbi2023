import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Select } from 'shared/ui/Select/Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'text',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' },
        { value: '3', content: 'Третий пункт' }
    ]
}
