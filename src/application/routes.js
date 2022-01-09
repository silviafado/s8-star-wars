import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from '../pages/Home'
import ListPage from '../pages/ListPage';
import ShipPage from '../pages/ShipPage';

// Exercise 5: Routes
const Path = () => {

    const [list, setList] = useState([]);
    const [nextPage, setNextPage] = useState("https://swapi.py4e.com/api/starships/?page=1");

    useEffect(() => {
        axios({ url: nextPage })
            .then((response) => {
                console.log(response.data.results);
                setList(response.data.results);
                setNextPage(response.data.next);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList, setNextPage]);

    return (
        <BrowserRouter>
            <Routes list={list} >
                <Route exact path="/" element={<Home list={list} />} />
                <Route path="/list/" element={<ListPage list={list} />} />
                <Route path="/starships/:id" element={<ShipPage list={list} />} />
                <Route path="*" element={() => <div>404</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Path;