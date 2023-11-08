import React from 'react'
import type { ComponentStory } from '@storybook/react'
import { Flex } from './Flex'

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template: ComponentStory<typeof Flex> = (args: any) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const Column = Template.bind({})
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const Gap4 = Template.bind({})
Gap4.args = {
    gap: '4',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const Gap8 = Template.bind({})
Gap8.args = {
    gap: '8',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const Gap16 = Template.bind({})
Gap16.args = {
    gap: '16',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const Gap32 = Template.bind({})
Gap32.args = {
    gap: '32',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const ColumnGap32 = Template.bind({})
ColumnGap32.args = {
    gap: '32',
    direction: 'column',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}
