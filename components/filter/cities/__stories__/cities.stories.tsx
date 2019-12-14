import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
import { CitiesCard } from '../cities.mobile';

const cities = [
  { name: 'Toronto456', img: '/toronto-pic.png', nation: 'Canada' },
  { name: 'Vancouver', img: '/vancouver-pic.png', nation: 'Canada' },
  { name: 'Newyork', img: '/newyork-pic.png', nation: 'United States' },
];

storiesOf('Filters/CitiesCard', module).add('CitiesCard', () => {
  return <CitiesCard cities={cities} />;
});
