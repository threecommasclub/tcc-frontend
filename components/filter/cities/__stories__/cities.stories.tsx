import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import { CitiesCard } from '../cities.mobile';

const label = 'CitiesCard';

storiesOf('Filters/CitiesCard', module).add('CitiesCard', () => {
  const defaultValue = {
    name: 'Toronto',
    nation: 'Canada',
  };
  const props = object(label, defaultValue);
  return <CitiesCard {...props} />;
});
