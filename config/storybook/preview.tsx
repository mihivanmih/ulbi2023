import {Preview} from "@storybook/react";
// import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import {Theme} from "../../src/app/providers/ThemeProvider";
import 'app/styles/index.scss'
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouteDecorator} from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";

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

export const decorators = [ThemeDecorator(Theme.LIGHT), RouteDecorator]
