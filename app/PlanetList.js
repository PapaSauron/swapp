import React from 'react';

export default class PlanetList extends React.Component {
    constructor() {
        super();
        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        fetch('https://swapi.co/api/planets/?format=json')
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((myJson) => {
                const rawJson = myJson;
                const planets = rawJson.results;
                this.setState({ planets: planets })
                console.log(planets);
            });

    }

    render() {
        const planetList = this.state.planets.map((planet) => {
            return <li key={planet.name}><a href='#'>{planet.name}</a></li>;
        });
        return (
            <React.Fragment>
                <ul>
                    {planetList}
                </ul>
            </React.Fragment>
        )
    }
}