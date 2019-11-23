import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import { AuthView } from '../authView.mobile';

const label = 'AuthView';

storiesOf('Auth/AuthView', module).add('AuthView', () => {
  const defaultValue = {
    label: 'Sign In',
  };
  const props = object(label, defaultValue);
  return <AuthView {...props} />;
});
