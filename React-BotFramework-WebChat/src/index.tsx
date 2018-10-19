import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { CollapsibleChat } from './components/CollapsibleChat/CollapsibleChat';

ReactDOM.render(
  <CollapsibleChat isOpened={false} />,    
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();