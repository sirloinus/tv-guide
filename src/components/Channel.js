import React from 'react';

const Channel = ({channel}) => {

    return (
        <div className="channel">
            <div className="logo-wrapper">
                {channel.name}
                <img src="" alt="" className="logo"/>
            </div>
        </div>
    )

}

export default Channel