import React from 'react';
import { storiesOf } from '@storybook/react';
import { CurationCard } from '../curation-card.mobile';

const label = 'CurationCard';

storiesOf('Cards/CurationCard', module).add('CurationCard', () => {
  const dummyData = [
    {
      id: 1,
      name: 'Rangle.io',
      address: '255 King Street W, Toronto',
      tags: ['Fintech', 'Employ Benefit', 'Consulting'],
    },
    {
      id: 2,
      name: 'Google',
      address: '177 Linus Rd, Toronto',
      tags: ['Great Environment', 'Easy apply', 'Great income'],
    },
    { id: 3, name: 'Facebook', address: '55 Queens Ave, Toronto', tags: ['Good accessibility', 'Agile', 'Balance'] },
    { id: 4, name: 'Netflix', address: '572 Bay st', tags: ['Free Movie', 'Tech workshops'] },
    {
      id: 5,
      name: 'MicroSoft',
      address: '20224 Pemberton Ave, Toronto',
      tags: ['Fintech', 'Great environment', 'Great income'],
    },
  ];
  const props = { dummyData };
  return <CurationCard {...props} />;
});
