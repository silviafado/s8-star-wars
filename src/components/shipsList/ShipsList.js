import { StylesList, StylesLi, StylesParag, StylesButton } from './ShipListStyles';
import { StylesHeader, StylesLogo } from '../../styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_starwars.png'

const ShipsList = ({ list }) => {

    const formattedList = list.map((ship, id) =>
        <StylesLi key={id}>
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
                {formattedList}
            </StylesList>

            <StylesButton>
                <button>View more...</button>
            </StylesButton>
        </>
    )
}

export default ShipsList;