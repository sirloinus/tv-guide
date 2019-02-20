import React from 'react';
import Programme from './Programme';

const ProgrammesContainer = ({programmes}) => {

    return (
        <div className='programmes'>
            {programmes.map(programme => <Programme programme={programme}/>)}
        </div>
    )

}

export default ProgrammesContainer