import React from 'react'
import type { ComponentStory } from '@storybook/react'
import AvatarImg from './storybook.jpg'
import { Avatar } from './Avatar'

export default {
    title: 'shared/AvatarDeprecated',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    size: 150,
    src: AvatarImg,
}

export const Small = Template.bind({})
Small.args = {
    size: 50,
    src: AvatarImg,
}
