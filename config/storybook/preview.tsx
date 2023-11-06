import {Preview} from "@storybook/react";
import 'app/styles/index.scss'
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouteDecorator} from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";
import {SuspenseDecorator} from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import {Theme} from "../../src";

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#fff' },
                { name: 'dark', class: Theme.DARK, color: '#000' },
                { name: 'orange', class: Theme.ORANGE, color: '#ffb005' }
            ],
        },
    }
};

export const decorators = [ThemeDecorator(Theme.LIGHT), RouteDecorator, SuspenseDecorator]
