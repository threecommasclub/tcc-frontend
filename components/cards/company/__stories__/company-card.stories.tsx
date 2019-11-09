import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import { CompanyCard } from '../company-card.mobile';

const label = 'CompanyCard';

storiesOf('Cards/CompanyCard', module).add('CompanyCardWithImage', () => {
  const defaultValue = {
    name: 'CompanyUsing',
    date: '11th Oct 2019',
    address: '177 linus rd, North York',
  };
  const props = object(label, defaultValue);
  return <CompanyCard {...props} />;
});
