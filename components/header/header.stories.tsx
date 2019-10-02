import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Header from './header';

const label = 'Text';
const defaultValue = 'Header';

storiesOf('Header', module).add('Header', () => <Header>{text(label, defaultValue)}</Header>, {
  info: { inline: true },
});