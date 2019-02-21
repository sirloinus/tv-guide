import React, { Component } from 'react';
import TimeNav from './TimeNav';
import ChannelRowsContainer from './ChannelRowsContainer';

class TvGuide extends Component {

    state = {
        channelProgrammes: {}
    }

    async componentDidMount() {
        const fileNames = ["1", "2", "3", "4", "5", "6", "channels"]
        await fileNames.forEach( file => this.getData(file))
            .then(this.sortData())
    }

    getData = async (fileName) => {
        const response = await fetch(`http://localhost:3000/data/${fileName}.json`)
        const data = await response.json()
        const extractedData = data.result
        const key = fileName
        this.setState({[key]: extractedData})
    }

    sortData = () => {
        const days = [this.state["1"], this.state["2"], this.state["3"], this.state["4"], this.state["5"], this.state["6"]]
        // console.log(days)
        days.forEach(day => {
            // console.log(day)
            day.forEach(programme => {
                if (this.state.channelProgrammes.hasOwnProperty(programme.channelID)) {
                    const key = `channelProgrammes.${programme.channelID}`
                    const programmes = [...this.state.channelProgrammes.channelID]
                    programmes.push(programme)
                    this.setState({ [key]: programmes })
                } else {
                    const key = `channelProgrammes.${programme.channelID}`
                    const starterArray = [...programme]
                    this.setState({ [key]: starterArray })
                }
            }
            )
        }
        )
    }

    // sortData = () => {
    //     const fileNames = ["1", "2", "3", "4", "5", "6"]
    //     fileNames.forEach(file =>
    //         file.map(programme => 
    //             this.state.channelProgrammes.hasOwnProperty(programme.channelID) ?

    //                 (const key = `channelProgrammes.${programme.channelID}`
    //             const programmes = [...this.state.channelProgrammes.channelID]
    //             programmes.push(programme)
    //             this.setState({ [key]: programmes })) :

    //         (const key = `channelProgrammes.${programme.channelID}`
    //             const starterArray = [...programme]
    //             this.setState({ [key]: starterArray }))  
    //         )
    //     )
    // }

    render() {
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