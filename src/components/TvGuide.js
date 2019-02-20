import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRowsContainer from './ChannelRowsContainer';

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
        const extractedData = data.result
        const key = fileName
        this.setState({[key]: extractedData})
    }

    render() {
        // const programmes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
        // const channel = 'BBC'
        const { channels } = this.state

        return (
            <div>
                <TimeNav />
                {
                    channels ? <ChannelRowsContainer channels={channels} /> : console.log('hi')
                }
               
            </div>
        )
    }
}

export default TvGuide