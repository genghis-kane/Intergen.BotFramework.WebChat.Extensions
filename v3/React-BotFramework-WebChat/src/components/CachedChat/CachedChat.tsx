import * as React from 'react';

import { Chat, DirectLine } from 'botframework-webchat';
import './botchat.css';

export interface IState {
    botConnection: DirectLine;
};

export class CachedChat extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.initConnection();
        this.subscribeToMessageEvent();
    }

    public initConnection() {
        let connection = null;

        const savedConversationId = localStorage.getItem('conversationId');
        if (savedConversationId) {
            connection = new DirectLine({
                conversationId: savedConversationId,
                secret: 'i3iEIj7TxHE.cwA.5FI.fB-zgPpcbK07KzmRK5JHY51bQw9Yzo8L9X4S3DHt1i8', // LDP DEV
                webSocket: false
            });       
        } else {
            connection = new DirectLine({
                secret: 'i3iEIj7TxHE.cwA.5FI.fB-zgPpcbK07KzmRK5JHY51bQw9Yzo8L9X4S3DHt1i8', // LDP DEV
            });
        }

        this.state = {
            botConnection: connection
        }
    }

    public subscribeToMessageEvent() {
        this.state.botConnection.activity$.subscribe(activity => {
            if (!localStorage.getItem('conversationId')) {
                if (activity.conversation) {
                    localStorage.setItem('conversationId', activity.conversation.id);
                }
            }
        });
    }

    public render() {
        return (
            <div >
                <Chat 
                    botConnection={this.state.botConnection}
                    user={{ id: 'user_id', name: 'user_name' }}
                    adaptiveCardsHostConfig={{}}
                    bot={{ id: 'botid', name: 'Lumo' }}
                />
            </div>
            
        );
    }
}