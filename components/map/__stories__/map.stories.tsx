import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import { Map } from '../map';

const label = 'viewport';
const groupId = 'map-viewport';

storiesOf('Map', module)
  .add('Map (400x400)', () => {
    const defaultValue = {
      latitude: 43.6425,
      longitude: -79.3892,
      zoom: 10,
      width: 400,
      height: 400,
    };
    const props = object(label, defaultValue, groupId);
    return <Map {...props} />;
  })
  .add('Map (full-size)', () => {
    const defaultValue = {
      latitude: 43.6425,
      longitude: -79.3892,
      zoom: 10,
      width: '100vw',
      height: '100vh',
    };
    const props = object(label, defaultValue, groupId);
    return <Map {...props} />;
  });
