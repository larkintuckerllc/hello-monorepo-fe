import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import Another from 'components/lib/Another';
import Hello from 'components/lib/Hello';

ReactDOM.render(
  <Catalog
    title='Catalog'
    pages={[
      {
        imports: { Another, Hello },
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md'),
      },
    ]}
  />,
  document.getElementById('root')
);
