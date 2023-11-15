import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import Avatar from '../../../../shared/assets/test/storybook.jpg'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template: ComponentStory<typeof ProfileCard> = (args: any) => (
    <ProfileCard {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    data: {
        username: 'admin',
        age: 34,
        country: Country.Russia,
        lastname: 'test',
        first: 'asd',
        city: 'Moskow',
        currency: Currency.EUR,
        avatar: Avatar,
    },
}
export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = {
    data: {
        username: 'admin',
        age: 34,
        country: Country.Russia,
        lastname: 'test',
        first: 'asd',
        city: 'Moskow',
        currency: Currency.EUR,
        avatar: Avatar,
    },
}
NormalRedesigned.decorators = [NewDesignDecorator]

export const withError = Template.bind({})
withError.args = {
    error: 'true',
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
