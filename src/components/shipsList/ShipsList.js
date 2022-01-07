import { StylesList, StylesLink, StylesLi, StylesParag } from './ShipListStyles';
import { GlobalStyle, StylesHeader, StylesLogo } from '../../styled';
import logo from '../../assets/logo_starwars.png'

const ShipsList = ({ list }) => {

    const formattedList = list.map((ship, id) =>
        <StylesLi key={id}>
            <StylesLink href={`/starships/${id}`} key={id} ship={ship}>
                <StylesParag>Name: {ship.name.toUpperCase()}</StylesParag>
                <StylesParag>Model: {ship.model}</StylesParag>
            </StylesLink>
        </StylesLi>
    )

    console.log(list);

    return (
        <>
            <GlobalStyle />
            <StylesHeader>
                <StylesLogo src={logo} alt="logo" />
            </StylesHeader>
            <StylesList list={list}>
                {formattedList}
            </StylesList>
            <button>View more...</button>
        </>
    )
}

export default ShipsList;