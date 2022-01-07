import { StylesList } from './ShipListStyles';

const ShipsList = ({ list }) => {

    const formattedList = list.map((ship, id) =>
        <li key={id}>
            <a href={`/starships/${id}`} key={id} ship={ship}>
                <p>Name: {ship.name}</p>
                <p>Model: {ship.model}</p>
            </a>
        </li>
    )

    console.log(list);

    return (
        <StylesList list={list}>
            {formattedList}
        </StylesList>
    )
}

export default ShipsList;