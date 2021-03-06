import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
import { Button } from '../button';

const label = 'Text';
const defaultValue = 'Submit';
const groupId = 'button-text';

storiesOf('Buttons', module).add('Button', () => {
  const props = object(label, defaultValue, groupId);
  return <Button {...props} />;
});
