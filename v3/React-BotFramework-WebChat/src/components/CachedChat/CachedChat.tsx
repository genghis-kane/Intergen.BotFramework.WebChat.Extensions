import * as React from 'react';

import { Chat, DirectLine } from 'botframework-webchat';

import { IBotParams } from '../../BotParams';

import './botchat.css';

export interface IProps {
    botParams: IBotParams;
};

export interface IState {
    botConnection: DirectLine;
};

export class CachedChat extends React.Component<IProps, IState> {
    constructor(props: IProps) {
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
                secret: this.props.botParams.id,
                webSocket: false
            });       
        } else {
            connection = new DirectLine({
                secret: this.props.botParams.id,
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
                    bot={{ id: 'botid', name: this.props.botParams.name }}
                />
            </div>
            
        );
    }
}