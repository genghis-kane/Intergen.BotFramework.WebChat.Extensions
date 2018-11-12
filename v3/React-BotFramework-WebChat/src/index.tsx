import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CollapsibleChat } from './components/CollapsibleChat/CollapsibleChat';
import { Icon } from './components/Icon/Icon';
import Resources from './utils/resources';

import './index.css';

const chatbotEmbedNode = document.getElementById('chatbot-embed-node');
if (chatbotEmbedNode) {
  const botParams = {
    id: Resources.getBotId,
    name: Resources.getBotName
  };

  ReactDOM.render(
    <CollapsibleChat botParams={botParams} isOpened={false} icon={<Icon />}
    />,
    document.getElementById('chatbot-embed-node') as HTMLElement
  );
}