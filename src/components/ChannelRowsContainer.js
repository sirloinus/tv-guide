import React from 'react';
import ChannelRow from './ChannelRow';

const ChannelRowsContainer = ({channels}) => {

    return (
        <div className='channel-rows'>
            {channels.channels.map(channel => <ChannelRow channel={channel} />)}
        </div>
    )

}

export default ChannelRowsContainer