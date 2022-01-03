import { useState } from 'react';
import { StylesProfile } from './ShipProfileStyles';
import { useParams } from "react-router";
import axios from 'axios';


const ShipProfile = ({ list }) => {

    const { id } = useParams();

    const [ship, setShip] = useState({ name: '', description: '', model: '', cost: '', speed: '', manufacturer: '', length: '', crew: '', photo: '', id: id });

    const getData = async () => {
        const results = await axios
            .get(`https://swapi.dev/api/starships/${id}/`)
            .then((res) => {
                setShip({ name: res.data.name, description: res.data.description, model: res.data.model, cost: res.data.cost_in_credits, speed: res.data.max_atmosphering_speed, manufacturer: res.data.manufacturer, length: res.data.length, crew: res.data.crew, photo: '', id: id });
            })


    };
    getData();

    console.log(ship);



    return (
        <StylesProfile ship={ship} id={id}>
            <div key={ship.id} >
                <header>{ship.photo}</header>
                <p>{ship.name}</p>
                <p>{ship.description}</p>
                <div>
                    <p>Model: {ship.model}</p>
                    <p>Cost in credits: {ship.cost}</p>
                    <p>Atmospheric Speed: {ship.speed}</p>
                </div>
                <div>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Length: {ship.length}</p>
                    <p>Crew: {ship.crew}</p>
                </div>
            </div>
        </StylesProfile>
    )

}

export default ShipProfile;