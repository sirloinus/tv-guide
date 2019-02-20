import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRow from './ChannelRow';

class TvGuide extends Component {

    state = {

    }

    componentDidMount() {
        const fileNames = ["1", "2", "3", "4", "5", "6", "channels"]
        fileNames.forEach( file => this.getData(file))
    }

    getData = async (fileName) => {
        const response = await fetch(`http://localhost:3000/data/${fileName}.json`)
        const data = await response.json()
        const key = fileName
        this.setState({[key]: data})
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