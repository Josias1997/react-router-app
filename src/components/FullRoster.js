import React from 'react';
import Players from '../mocks/Players';

import { Link } from 'react-router-dom';

const FullRoster = () => {
    return (
        <div>
            <ul>
                {
                    Players.map((player, index) => (
                        <li key={index}>
                            <Link to={`/roster/${index}`}>
                                {`${player.name} ${player.role}`}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FullRoster;