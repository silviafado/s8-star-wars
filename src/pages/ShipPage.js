import { useState } from 'react';
import { useParams } from 'react-router';
import { GlobalStyle, StylesHeader, StylesLogo } from '../styled'
import { StylesProfile, StylesDiv, StylesSection, StylesImg } from '../components/shipProfile/ShipProfileStyles';
import { StylesButton } from '../components/shipsList/ShipListStyles';
import NavBar from '../components/navbar/NavBar';
import logo from '../assets/logo_starwars.png';
import corvette from '../assets/CR90-corvette.jpg';
import rebel from '../assets/rebel-transport.jpg';
import star from '../assets/star-destroyer.jpeg';

const ShipPage = ({ list }) => {

    const [num, setNum] = useState();

    let { id } = useParams();

    console.log(id)

    const next = id < 10 ? parseInt(id) + 1 : id;
    console.log(next);
    const ship = { ...list[id] };
    console.log(ship);
    const nextShip = { ...list[next] };
    console.log(nextShip);

    const shipNum = async () => {
        const num = await ship.url.replace(/[^\d]/g, '').slice(1);
        console.log(num);
        setNum(num)
        return num;
    }

    shipNum();

    console.log(ship.name);

    const photoSrc = e => {
        switch (ship.name) {
            case 'CR90 corvette':
                e.target.src = corvette;
                break;
            case 'Star Destroyer':
                e.target.src = star;
                break;
            case 'Rebel transport':
                e.target.src = rebel;
                break;
        }
    }

    return (
        <div key={id} id={id} ship={ship} list={list}>
            <GlobalStyle />
            <NavBar id={id} list={list} />
            <StylesHeader>
                <StylesLogo src={logo} alt="logo" />
            </StylesHeader>
            <StylesProfile key={id} id={id} ship={ship}>
                <header><StylesImg src={`https://starwars-visualguide.com/assets/img/starships/${num}.jpg`} onError={photoSrc} alt={`Photo ${ship.name}.`} /></header>
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
                <StylesButton id={next} ship={nextShip}>
                    <a href={`/starships/${next}`} id={next} ship={nextShip}><button>Next</button></a>
                </StylesButton>
            </StylesProfile>
        </div>
    )
}

export default ShipPage;