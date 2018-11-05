import * as React from 'react';

import { Chat, DirectLineOptions } from 'botframework-webchat';
import 'botframework-webchat/botchat.css'

import { DirectLineAuth } from '../../utils/Enums';

export interface IProps {
    authMethod: DirectLineAuth;
    persistUser: boolean;
    persistConversation: boolean;
    directLineOptions: DirectLineOptions;
};

export interface IState {
    isOpened: boolean;
};

export class CachedChat extends React.Component<IProps, IState> {
    private directLineOptions: DirectLineOptions;

    constructor(props: IProps) {
        super(props);
        
        if (this.props.authMethod === DirectLineAuth.Secret) {
            this.directLineOptions = {
                secret: this.props.directLineOptions.secret
            }
        }

        if (this.props.authMethod === DirectLineAuth.Token) {
            this.directLineOptions = {
                token: this.props.directLineOptions.token
            }
        }
    }

    public render() {
        return (
            <Chat 
                directLine={this.directLineOptions}
                user={{ id: 'user_id', name: 'user_name' }}
                adaptiveCardsHostConfig={{}}
                bot={{ id: 'botid', name: 'botname' }}
            />
        );
    }
}