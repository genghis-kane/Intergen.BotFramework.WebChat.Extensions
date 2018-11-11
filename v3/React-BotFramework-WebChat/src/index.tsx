import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { CollapsibleChat } from './components/CollapsibleChat/CollapsibleChat';
import { Icon } from './components/Icon/Icon';

import './index.css';

ReactDOM.render(
  <CollapsibleChat isOpened={false} icon={<Icon />}
  />,
  document.getElementById('chatbot-embed-node') as HTMLElement
);
registerServiceWorker();