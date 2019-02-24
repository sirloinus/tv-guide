import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRowsContainer from './ChannelRowsContainer';

class TvGuide extends Component {

    state = {
        loadedData: 0,
        channelProgrammes: {},
        awesomeProgrammesObj: {}
    }

    async componentDidMount() {
        const fileNames = ["channels", "1", "2", "3", "4", "5", "6"]
        let data = { ...await this.buildNewsState(fileNames)}
        let channelsList = [...data.channels]
        let programmesListDays = {}

        fileNames.forEach(item => {
            if (item !== 'channels') {
                programmesListDays[item] = [...data[item]]
            }
        })


        let awesomeProgrammesObj = {}
        console.log('programmesList', programmesListDays)
        console.log('channelsList', channelsList)

        let dummy = []
        channelsList.forEach(channel => {
            let channelObj = {}

            programmesListDays.forEach(programmeListDay => {
                channelObj[Object.keys(programmeListDay)[0]] = programmeListDay.filter(programmes => {
                    if (channel.groupID === programmes.channelID) {
                        return programmes;
                        
                    }
                })

            })
            dummy.push(channelObj)
            // let channelProgramms = Object.keys(programmesList).filter(programmeKey => {
            //     console.log(programmeKey)
                
            //         if(channel.groupID === programmesList[programmeKey].channelID) {
            //             console.log(programmesList[programmeKey]);
            //             return programmesList[programmeKey]
            //         }
            //     })

            // // console.log(channelProgramms);
            // awesomeProgrammesObj[channel.groupID] = [...channelProgramms]
        })


        console.log(dummy)
        
        
    }

    buildNewsState = async (fileNames) => {
        let newState = {}
        await Promise.all(fileNames.map(async file => {
            const obj = await this.getData(file)
            newState = {
                ...newState,
                ...obj
            }
        }))

        return newState
    }

    getData = async (fileName) => {
        const response = await fetch(`http://localhost:3000/data/${fileName}.json`)
        const data = await response.json()
        const extractedData = (fileName === 'channels') ? data.result.channels : data.result
        // console.log({ [fileName]: extractedData})
        return {[fileName]: extractedData}
    }

    // sortData = (fileNames) => {
    //     fileNames.forEach(key => {
    //         const data = this.state[key]
    //         console.log(data)
    //         if (key !== 'channels') {
    //             // console.log(`DAY:${key}`, data)
    //             data.forEach(programme => {
    //                 console.log('Prog', programme)
    //                 if (this.state.channelProgrammes.hasOwnProperty(programme.channelID)) {
    //                     console.log("ehehehe")
    //                     const programmes = [...this.state.channelProgrammes.channelID]
    //                     programmes.push(programme)
    //                     this.setState({
    //                         channelProgrammes: {
    //                             ...this.state.channelProgrammes,
    //                             [programme.channelID]: programmes
    //                         }
    //                     }, () => {
    //                         console.log("HERE!!!")
    //                     })
    //                 } else {
    //                     const starterArray = []
    //                     starterArray.push(programme)
    //                     console.log(programme.channelID, "day", key)
    //                     console.log(starterArray)
    //                     console.log('ho!!!!!')
    //                     this.setState({ channelProgrammes: { test: starterArray } })
    //                     // this.setState({ channelProgrammes: {
    //                     //     [programme.channelID]: starterArray
    //                     // }})
    //                 }
    //             })
    //         }
    //     })
    // }

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




// , () => {
//     if (fileName === 'channels') {
//         this.state.channels.forEach(chan => {
//             this.setState({
//                 ...this.state.channelProgrammes,
//                 channelProgrammes: {
//                     ...this.state.channelProgrammes[chan.groupID],
//                     [chan.groupID]: {
//                         channelInfo: chan,
//                         programmes: []
//                     }
//                 }
//             })
//         })
//     }
//     // this.sortData(fileName)
// }