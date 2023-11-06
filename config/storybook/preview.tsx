import {Preview} from "@storybook/react";
import 'app/styles/index.scss'
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouteDecorator} from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";
import {SuspenseDecorator} from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    }
};

export const decorators = [ThemeDecorator(Theme.LIGHT), RouteDecorator, SuspenseDecorator]
