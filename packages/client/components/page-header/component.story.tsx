import { storiesOf } from '@storybook/react';
import * as React from 'react';
import PageHeader from "./index";

storiesOf("Page Header", module)
  .add("with text", () => <PageHeader />)
  