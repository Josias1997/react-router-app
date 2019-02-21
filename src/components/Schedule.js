import React from 'react';
import Planning from '../mocks/Planning';

const Schedule = () => (
    <div>
        <ul>
            {
                Planning.map((element, index) => (
                    <li key={index}>
                        {element.date} {element.adversary}
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Schedule;