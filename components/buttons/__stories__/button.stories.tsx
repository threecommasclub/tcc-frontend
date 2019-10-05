import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Button from '../button';

const label = 'Text';
const defaultValue = 'Submit';
const groupId = 'button-text';

storiesOf('Buttons', module).add('Button', () => <Button>{text(label, defaultValue, groupId)}</Button>, {
  info: { inline: true },
});
