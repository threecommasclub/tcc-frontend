import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import { CollectionsCard } from '../collections.mobile';

const label = 'CollectionsCard';

storiesOf('Filters/CollectionsCard', module).add('CollectionsCard', () => {
  const defaultValue = {
    title: 'Top 10\nGreat work-space',
  };
  const props = object(label, defaultValue);
  return <CollectionsCard {...props} />;
});
