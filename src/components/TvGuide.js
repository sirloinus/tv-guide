import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRowsContainer from './ChannelRowsContainer';

class TvGuide extends Component {

    state = {
        loadedData: 0,
        channelProgrammes: {}
    }

    async componentDidMount() {
        const fileNames = ["channels", "1", "2", "3", "4", "5", "6"]
        await fileNames.forEach( file => this.getData(file))
    }

    getData = async (fileName) => {
        const response = await fetch(`http://localhost:3000/data/${fileName}.json`)
        const data = await response.json()
        const extractedData = (fileName === 'channels') ? data.result.channels : data.result
        const increment = this.state.loadedData += 1
        this.setState({
            [fileName]: extractedData,
            loadedData: increment
        }, () => {
            if(fileName === 'channels') {
                this.state.channels.forEach(chan => {
                    this.setState({
                        ...this.state.channelProgrammes,
                        channelProgrammes: {
                            ...this.state.channelProgrammes[chan.groupID],
                            [chan.groupID]: {
                                channelInfo: chan,
                                programmes: []
                            }
                        }
                })
                })
            }
            // this.sortData(fileName)
        })
    }

    sortData = (fileNames) => {
        fileNames.forEach(key => {
            const data = this.state[key]
            console.log(data)
            if (key !== 'channels') {
                // console.log(`DAY:${key}`, data)
                data.forEach(programme => {
                    console.log('Prog', programme)
                    if (this.state.channelProgrammes.hasOwnProperty(programme.channelID)) {
                        console.log("ehehehe")
                        const programmes = [...this.state.channelProgrammes.channelID]
                        programmes.push(programme)
                        this.setState({
                            channelProgrammes: {
                                ...this.state.channelProgrammes,
                                [programme.channelID]: programmes
                            }
                        }, () => {
                            console.log("HERE!!!")
                        })
                    } else {
                        const starterArray = []
                        starterArray.push(programme)
                        console.log(programme.channelID, "day", key)
                        console.log(starterArray)
                        console.log('ho!!!!!')
                        this.setState({ channelProgrammes: { test: starterArray } })
                        // this.setState({ channelProgrammes: {
                        //     [programme.channelID]: starterArray
                        // }})
                    }
                })
            }
        })
    }

    // sortData = key => {
    //     const data = this.state[key]
    //     if ( key !== 'channels' ) {
    //         // console.log(`DAY:${key}`, data)
    //         data.forEach(programme => {
    //             console.log('Prog', programme)
    //             if (this.state.channelProgrammes.hasOwnProperty(programme.channelID)) {
    //                 console.log("ehehehe")
    //                 const programmes = [...this.state.channelProgrammes.channelID]
    //                 programmes.push(programme)
    //                 this.setState({ channelProgrammes: {
    //                     ...this.state.channelProgrammes,
    //                     [programme.channelID]: programmes
    //                 }}, () => {
    //                     console.log("HERE!!!")
    //                 })
    //             } else {
    //                 const starterArray = []
    //                 starterArray.push(programme)
    //                 console.log(programme.channelID, "day", key)
    //                 console.log('ho!!!!!')
    //                 this.setState({channelProgrammes: {test: starterArray}})
    //                 // this.setState({ channelProgrammes: {
    //                 //     [programme.channelID]: starterArray
    //                 // }})
    //             }
    //         })
    //     } 
    // }

    render() {
        const { channels, loadedData } = this.state

        return (
            <div>
                <TimeNav />
                {
                    loadedData === 7 ? <ChannelRowsContainer channels={channels} /> : console.log('loading...')
                }
               
            </div>
        )
    }
}

export default TvGuide