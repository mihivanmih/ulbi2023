import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'features/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof EditableProfileCardHeader> = (
    args: any,
) => <EditableProfileCardHeader {...args} />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
