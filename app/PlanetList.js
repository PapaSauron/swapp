import React from 'react';

export default class PlanetList extends React.Component {
    constructor() {
        super();
        this.state = {
            planets: []
        };
        this.fetchPlanets = this.fetchPlanets.bind(this);
    }

    fetchPlanets(url){
        console.log('==fetchPlanets: ' + url);
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((rawJson) => {
            const planets = rawJson.results;
            const currentPlanets = this.state.planets;
            const nextPlanets = currentPlanets.concat(planets);
            this.setState({ planets: nextPlanets });
            if(rawJson.next){
                this.fetchPlanets(rawJson.next);
            }
        });
    }

    componentDidMount() {
        const url = 'https://swapi.co/api/planets/?format=json';
        this.fetchPlanets(url);
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