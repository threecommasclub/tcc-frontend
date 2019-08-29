import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../styles/tailwind.css';

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
