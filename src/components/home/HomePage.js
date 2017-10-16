import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div cassName="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, Redus and REact Router in ES6 for ultra-responsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;