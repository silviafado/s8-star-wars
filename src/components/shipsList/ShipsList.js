import { useState, useEffect } from 'react';
import { StylesList } from './ShipListStyles';
import axios from 'axios';
import ShipProfile from '../shipProfile/ShipProfile';


const ShipsList = () => {

    const [list, setList] = useState([]);
    const [nextPage, setNextPage] = useState(
        "https://swapi.py4e.com/api/starships/?page=1"
    );

    useEffect(() => {
        axios({
            url: nextPage,
        })
            .then((response) => {
                console.log(response.data.results);
                setList(response.data.results);
                setNextPage(response.data.next);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList, setNextPage]);


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
        <>
            <StylesList list={list}>
                {formattedList}
            </StylesList>
            <ShipProfile list={list} />
        </>
    )
}

export default ShipsList;