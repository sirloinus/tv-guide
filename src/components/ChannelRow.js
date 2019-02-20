import React, { Component } from 'react';
import Channel from './Channel';
import ProgrammesContainer from './ProgrammesContainer';

class ChannelRow extends Component {

    state = {

    }

    render() {
        const { channel } = this.props
        return (
            <div className='container'>
                <Channel channel={channel}/>
                <ProgrammesContainer programmes={["A", "B"]}/>
            </div>
        )
    }
}

export default ChannelRow