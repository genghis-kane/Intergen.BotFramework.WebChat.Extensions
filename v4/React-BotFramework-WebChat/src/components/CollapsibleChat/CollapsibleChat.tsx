import * as React from 'react';

import { UnmountClosed } from 'react-collapse';
import { CachedChat } from '../CachedChat/CachedChat';
import './CollapsibleChat.css';

export interface IProps {
    isOpened: boolean;
    persistUser: boolean;
    persistConversation: boolean;
    icon: JSX.Element;
};

export interface IState {
    isOpened: boolean;
};

export class CollapsibleChat extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isOpened: this.props.isOpened
        };
    }

    public toggle = (event: React.MouseEvent<HTMLElement>) => {
        const newState = !this.state.isOpened;
        this.setState({isOpened: newState});
    }
    
    public render() {
        return (
            <div className="collapsibleChatContainer">
                {!this.state.isOpened && (<div className="toggleIcon" onClick={this.toggle}>{this.props.icon}</div> )}             
                <UnmountClosed isOpened={this.state.isOpened} fixedHeight={590}>
                    <div className="chatWindowPositioner">
                        <div className="chatWindowContainer">
                            {this.props.persistConversation && (
                                <CachedChat />
                            )}

                            {!this.props.persistConversation && (
                                <div>Henlo</div>
                            )}  
                        </div>
                    </div>
                </UnmountClosed>
            </div>     
        );
      }
}