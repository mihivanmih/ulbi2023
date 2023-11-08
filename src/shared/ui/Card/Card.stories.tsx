import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Text } from '../Text/Text'
import { Card } from '../Card/Card'

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
    children: <Text title={'test'} text={'text test'} />,
}
