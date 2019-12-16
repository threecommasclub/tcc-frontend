import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
import { DetailView } from '../detail.mobile';

const label = 'DetailView';

storiesOf('Detail', module).add('DetailView', () => {
  const defaultValue = {
    title: 'Detail',
    name: 'Rangle.io',
    address: '255 King Street W, Toronto',
    logo: '',
    tags: ['Fintech', 'Employ Benefit', 'Consulting'],
    description:
      'A company is called Rangle.io. blahblahblahblah blahblah blahblahblahblah blahblahblahblah blahblahblahblahblahblah blahblah a blahblah blahblahblahblah an blahblah the blahblahblahblahblahblah a blahblah.',
    mapInfo: {
      latitude: 43.642,
      longitude: -79.3892,
      width: 400,
      height: 400,
      zoom: 10,
    },
  };
  const props = object(label, defaultValue);
  return <DetailView {...props} />;
});
