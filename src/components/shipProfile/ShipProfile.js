import { StylesProfile } from './ShipProfileStyles';


const ShipProfile = ({ id, list }) => {
    console.log(list)


    const ship = { ...list[id] }


    return (
        <StylesProfile ship={ship}>
            <div key={id} >
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