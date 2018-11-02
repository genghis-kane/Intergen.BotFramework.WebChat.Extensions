import * as React from 'react';

import { Chat } from 'botframework-webchat';
import 'botframework-webchat/botchat.css'

export interface IProps {
    isOpened: boolean;
    persistUser: boolean;
    persistConversation: boolean;
    icon: JSX.Element;
};

export interface IState {
    isOpened: boolean;
};

export class IntergenChat extends React.Component<IProps, IState> {
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