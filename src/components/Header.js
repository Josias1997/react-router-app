import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>(
    <header className="masthead mb-auto">
        <div className="inner">
            <h3 className="masthead-brand">Sport Team App</h3>
            <nav className="nav nav-masthead justify-content-center">
                <ul>
                    <li className="nav nav-link active"><Link to="/">Home</Link></li>
                    <li className="nav nav-link"><Link to="/roster">Roster</Link></li>
                    <li className="nav nav-link"><Link to="/schedule">Schedule</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;