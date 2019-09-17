import React from 'react';

export default class PlanetList extends React.Component {
    constructor() {
        super();
        const planetNames = [
            'Alderaan',
            'Yavin IV',
            'Hoth'
        ];
        this.state = { planetNames: planetNames };
        console.log('constructor');
    }

    render() {
        console.log('render');
        const planetList = this.state.planetNames.map((name) => {
            return <li key={name}><a href='#'>{name}</a></li>;
        });
        console.log(planetList);
        return (
            <React.Fragment>
                <ul>
                    {planetList}
                </ul>
            </React.Fragment>
        )
    }
}