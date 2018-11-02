import * as React from 'react';

import { Chat } from 'botframework-webchat';
import 'botframework-webchat/botchat.css'

export class CachedChat extends React.Component {
    public render() {
        return (
            <Chat 
                directLine={{ secret: 'direct_line_secret' }}
                user={{ id: 'user_id', name: 'user_name' }}
                adaptiveCardsHostConfig={{}}
                bot={{ id: 'botid', name: 'botname' }}
            />
        );
    }
}