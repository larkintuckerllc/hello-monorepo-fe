import React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from 'components/lib/Hello';

storiesOf('Hello', module)
  .add('displayed', () => (
    <Hello />
  ));
