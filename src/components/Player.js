import React from 'react';
import Players from '../mocks/Players';

const Player = props => {
    const index = props.match.params.number;

    const player = (Players[index] === 'undefined') ? null : Players[index];

    if (player)
    {
        return (
            <div>
                <h1>{player.name} {player.role}</h1>

                <h4>Position : {player.position}</h4>
            </div>
        )
    }
    else 
    {
        return (
            <div>
                <h2>Player not found</h2>
            </div>
        )
    }
}

export default Player;