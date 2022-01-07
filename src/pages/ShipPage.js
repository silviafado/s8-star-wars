import { useParams } from "react-router";
import { GlobalStyle, StylesHeader, StylesLogo } from '../styled'
import { StylesProfile, StylesDiv, StylesSection, StylesImg } from '../components/shipProfile/ShipProfileStyles';
import logo from '../assets/logo_starwars.png'

const ShipPage = ({ list }) => {

    let { id } = useParams();
    const ship = { ...list[id] };
    console.log(ship.url);

    return (
        <div id={id} ship={ship}>
            <GlobalStyle />
            <StylesHeader>
                <StylesLogo src={logo} alt="logo" />
            </StylesHeader>
            <StylesProfile key={id} >
                <header><StylesImg src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={`Photo ${ship.name}.`} /></header>
                <main>
                    <p>{ship.name}</p>
                    <p>{ship.description}</p>
                    <StylesDiv>
                        <StylesSection>
                            <p>Model: {ship.model}</p>
                            <p>Cost in credits: {ship.cost_in_credits}</p>
                            <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
                        </StylesSection>
                        <StylesSection>
                            <p>Manufacturer: {ship.manufacturer}</p>
                            <p>Length: {ship.length}</p>
                            <p>Crew: {ship.crew}</p>
                        </StylesSection>
                    </StylesDiv>
                </main>
            </StylesProfile>
        </div>
    )
}

export default ShipPage;