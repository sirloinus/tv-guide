import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRow from './ChannelRow';

class TvGuide extends Component {

    state = {

    }

    componentDidMount() {

    }

    getData = async () => {

    }

    render() {
        const programmes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
        const channel = 'BBC'
        return (
            <div>
                <TimeNav />
                <ChannelRow channel={channel} programmes={programmes}/>
            </div>
        )
    }
}

export default TvGuide