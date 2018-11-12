import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CachedChat } from '../src/components/CachedChat/CachedChat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CachedChat botParams={{ id: '12345', name: 'Bot-Test'}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
