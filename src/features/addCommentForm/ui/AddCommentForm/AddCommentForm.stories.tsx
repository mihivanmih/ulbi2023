import React from 'react'
import type { ComponentStory } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { action } from '@storybook/addon-actions'

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
const Template: ComponentStory<typeof AddCommentForm> = (args: any) => <AddCommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {
    onSendComment: action('onSendComment')
}
Normal.decorators = [StoreDecorator({})]
