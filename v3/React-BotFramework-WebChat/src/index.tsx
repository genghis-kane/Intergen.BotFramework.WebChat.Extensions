import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { MdChat } from 'react-icons/md';

import './index.css';

import { CollapsibleChat } from './components/CollapsibleChat/CollapsibleChat';

ReactDOM.render(
  <CollapsibleChat 
    isOpened={false} 
    persistUser={true}
    persistConversation={true} 
    icon={<MdChat size={50}/>}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();