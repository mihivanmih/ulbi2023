import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {
}
Light.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '222', isLoading: false }
})]

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: '222', isLoading: false }
})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {
}
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: { username: '123', id: '1' } }
})]
