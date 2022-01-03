import { useState } from 'react';
import { StylesList } from './ShipListStyles';


const ShipsList = ({ list }) => {

    const formattedList = list.map((ship, index) =>
        <li key={index}>
            <a href={`/starships/${index}`} key={index} ship={ship}>
                <p>Name: {ship.name}</p>
                <p>Model: {ship.model}</p>
            </a>
        </li>
    )


    console.log(formattedList);

    return (
        <StylesList>
            {formattedList}
        </StylesList>
    )
}

export default ShipsList;