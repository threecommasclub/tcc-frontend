import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import CompanyCard from '../company-card';

const label = 'Text';
const defaultValue = 'Company Using';

storiesOf('CompanyCard', module).add('CompanyCardWithImage', () => (
  <CompanyCard>{text(label, defaultValue)}</CompanyCard>
));
