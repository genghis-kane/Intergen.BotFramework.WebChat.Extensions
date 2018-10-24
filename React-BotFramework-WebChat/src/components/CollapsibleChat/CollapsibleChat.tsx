import * as React from 'react';

// import { Collapse } from 'react-collapse';
import { UnmountClosed } from 'react-collapse';
import { MdChat } from 'react-icons/md';
import { CachedChat } from '../CachedChat/CachedChat';
import './CollapsibleChat.css';

export interface IProps {
    isOpened: boolean
};

export interface IState {
    isOpened: boolean
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
                {!this.state.isOpened && (<div className="toggleIcon" onClick={this.toggle}><MdChat size={50}/></div> )}             
                <UnmountClosed isOpened={this.state.isOpened} fixedHeight={590}>
                    <div className="chatWindowPositioner">
                        <div className="chatWindowContainer">
                            <CachedChat />
                        </div>
                    </div>
                </UnmountClosed>
            </div>     
        );
      }
}