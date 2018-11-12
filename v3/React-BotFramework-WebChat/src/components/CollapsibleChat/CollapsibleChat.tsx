import * as React from 'react';
import { UnmountClosed } from 'react-collapse';

import { IBotParams } from '../../BotParams';

import { CachedChat } from '../CachedChat/CachedChat';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';

import './CollapsibleChat.css';

export interface IProps {
    botParams: IBotParams;
    isOpened: boolean;
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
                            <HeaderOverlay close={this.toggle} />                     
                            <CachedChat botParams={this.props.botParams} />
                        </div>
                    </div>
                </UnmountClosed>
            </div>     
        );
      }
}