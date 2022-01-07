import { useParams } from "react-router";
import { StylesProfile } from '../components/shipProfile/ShipProfileStyles'

const ShipPage = ({ list }) => {

    let { id } = useParams();
    const ship = { ...list[id] };

    return (
        <div id={id} ship={ship}>
            <div key={id} >
                <header><img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={`Photo ${ship.name}.`} /></header>
                <container>
                    <p>{ship.name}</p>
                    <p>{ship.description}</p>
                    <section>
                        <p>Model: {ship.model}</p>
                        <p>Cost in credits: {ship.cost_in_credits}</p>
                        <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
                    </section>
                    <section>
                        <p>Manufacturer: {ship.manufacturer}</p>
                        <p>Length: {ship.length}</p>
                        <p>Crew: {ship.crew}</p>
                    </section>
                </container>
            </div>
        </div>
    )
}

export default ShipPage;