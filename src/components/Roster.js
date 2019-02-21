import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

const Roster = () => (
    <Switch>
        <Route exact path='/Roster' component={FullRoster} />
        <Route path='/Roster/:number' component={Player} />
    </Switch>
)

export default Roster;