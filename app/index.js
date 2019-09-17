import React from 'react';
import ReactDOM from 'react-dom';

class AppContainer extends React.Component {
    render(){
        return(<h1>Star Wars</h1>)
    }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))