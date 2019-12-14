import React from 'react';
import { storiesOf } from '@storybook/react';
import { FilterHeader } from '../header.mobile';
import { object } from '@storybook/addon-knobs/react';

const props = { current: 'Discovery', title: 'Discovery' };

storiesOf('Filters/filterHeader', module).add('FilterHeader', () => <FilterHeader {...props} />);
