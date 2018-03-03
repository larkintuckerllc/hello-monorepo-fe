import React from 'react';
import { storiesOf } from '@storybook/react';
import Another from 'components/lib/Another';
import Hello from 'components/lib/Hello';

storiesOf('Hello', module)
  .add('displayed', () => (
    <Hello />
  ));
storiesOf('Another', module)
  .add('displayed', () => (
    <Another />
  ));
