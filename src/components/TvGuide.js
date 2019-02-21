import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRowsContainer from './ChannelRowsContainer';

class TvGuide extends Component {

    state = {
        loadedData: 0,
        channelProgrammes: {}
    }

    async componentDidMount() {
        const fileNames = ["1", "2", "3", "4", "5", "6", "channels"]
        await fileNames.forEach( file => this.getData(file))
        // await this.sortData()
    }

    getData = async (fileName) => {
        const response = await fetch(`http://localhost:3000/data/${fileName}.json`)
        const data = await response.json()
        const extractedData = (fileName === 'channels') ? data.result.channels : data.result
        const increment = this.state.loadedData += 1
        this.setState({
            [fileName]: extractedData,
            loadedData: increment
        })
    }

    // sortData = key => {
    //     console.log("AT START OF SORT DATA")
    //     const day = this.state[key]
    //     console.log(day)
    //     if(key === 'channels'){

    //     } else {
    //         day.forEach(programme => {
    //             if (this.state.channelProgrammes.hasOwnProperty(programme.channelID)) {
    //                 const key = `channelProgrammes.${programme.channelID}`
    //                 const programmes = [...this.state.channelProgrammes.channelID]
    //                 programmes.push(programme)
    //                 this.setState({ [key]: programmes }, () => {
    //                     console.log("HERE!!!", this.state.channelProgrammes)
    //                 })
    //             } else {
    //                 const key = `channelProgrammes.${programme.channelID}`
    //                 const starterArray = [...programme]
    //                 this.setState({ [key]: starterArray })
    //             }
    //         })
    //     }

    // }

    // sortData = () => {
    //     console.log("AT START OF SORT DATA")
    //     const days = [this.state["1"], this.state["2"], this.state["3"], this.state["4"], this.state["5"], this.state["6"]]
    //     console.log(days)
    //     days.forEach(day => {
    //         console.log("DAY", day)
    //         day.forEach(programme => {
    //             if (this.state.channelProgrammes.hasOwnProperty(programme.channelID)) {
    //                 const key = `channelProgrammes.${programme.channelID}`
    //                 const programmes = [...this.state.channelProgrammes.channelID]
    //                 programmes.push(programme)
    //                 this.setState({ [key]: programmes }, () => {
    //                     console.log("HERE!!!", this.state.channelProgrammes)
    //                 })
    //             } else {
    //                 const key = `channelProgrammes.${programme.channelID}`
    //                 const starterArray = [...programme]
    //                 this.setState({ [key]: starterArray })
    //             }
    //         })
    //     })
    // }

    render() {
        const { channels, loadedData } = this.state

        return (
            <div>
                <TimeNav />
                {
                    loadedData === 7 ? <ChannelRowsContainer channels={channels} /> : console.log('hi')
                }
               
            </div>
        )
    }
}

export default TvGuide