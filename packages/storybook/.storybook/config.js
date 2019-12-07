import { configure, addDecorator } from '@storybook/react';
import React from 'react'
import App from "../../client/components/app";

configure(require.context('../../client/components', true, /\.story\.tsx$/), module);

const StyleDecorator = storyFn => <App>{storyFn()}</App>

addDecorator(StyleDecorator)