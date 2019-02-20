import React, { Component } from 'react';
import Channel from './Channel';
import ProgrammesContainer from './ProgrammesContainer';

class ChannelRow extends Component {

    state = {

    }

    render() {
        const { programmes, channel } = this.props
        return (
            <div className='container'>
                <Channel channel={channel}/>
                <ProgrammesContainer programmes={programmes}/>
            </div>
        )
    }
}

export default ChannelRow