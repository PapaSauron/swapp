import React from 'react';
import ReactDOM from 'react-dom';
import PlanetList from './PlanetList';

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Star Wars</h1>
                <PlanetList />
            </div>)

    }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))