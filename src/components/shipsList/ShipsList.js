import { StylesList, StylesLi, StylesParag, StylesButton } from './ShipListStyles';
import { StylesHeader, StylesLogo } from '../../styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_starwars.png'
import InfiniteScroll from 'react-infinite-scroll-component';


// Exercise 1: Formatted component to load ship list on ListPage
const ShipsList = ({ list, page, setPage }) => {

    // Exercise 3: Get more starships with pagination
    const next = () => { if (page < 4) setPage(page + 1) };

    const formattedList = list.map((ship, id) =>
        <StylesLi key={id} ship={ship}>
            <Link to={`/starships/${id}`} key={id} ship={ship}>
                <StylesParag>Name: {ship.name.toUpperCase()}</StylesParag>
                <StylesParag>Model: {ship.model}</StylesParag>
            </Link>
        </StylesLi>
    )

    console.log(list);

    return (
        <>
            <StylesHeader>
                <StylesLogo src={logo} alt="logo" />
            </StylesHeader>
            <StylesList list={list}>
                <InfiniteScroll
                    dataLength={list.length}
                    next={next}
                    hasMore={true}>
                    {formattedList}
                </InfiniteScroll>
            </StylesList>
            <StylesButton>
                <button onClick={next} >View more...</button>
            </StylesButton>
        </>
    )
}

export default ShipsList;