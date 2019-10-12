import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';

import CurationCard from '../curation-card';

const label = 'CurationCard';

storiesOf('CurationCard', module).add(
  'CurationCard',
  () => {
    const defualtValue = {
      titleImage: '',
      title: 'Top 10\nGreat work-space',
    };
    const props = object(label, defualtValue);
    return <CurationCard {...props} />;
  },
  { info: { inline: true } }
);
