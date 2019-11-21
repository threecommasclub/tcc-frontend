import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import { CurationCard } from '../curation-card.mobile';

const label = 'CurationCard';

storiesOf('Cards/CurationCard', module).add('CurationCard', () => {
  const defaultValue = {
    titleImage: 'titles',
    title: 'Top 10\nGreat work-space',
  };
  const props = object(label, defaultValue);
  return <CurationCard {...props} />;
});
