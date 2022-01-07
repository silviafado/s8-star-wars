import { GlobalStyle, StylesHeader, StylesLogo, StylesHome } from '../styled';
import logo from '../assets/logo_starwars.png';

const Home = () => {

    return (
        <>
            <StylesHeader>
                <StylesLogo src={logo} alt="logo" />
            </StylesHeader>
            <GlobalStyle />
            <StylesHome>
                <a href="/list/">
                    <button>Enter Star Wars experience</button>
                </a>
            </StylesHome>
        </>
    )
}

export default Home;