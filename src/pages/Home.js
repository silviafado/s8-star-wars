import { GlobalStyle, StylesHeader, StylesLogo, StylesHome } from '../styled';
import NavBar from '../components/navbar/NavBar';
import logo from '../assets/logo_starwars.png';

const Home = ({ list }) => {

    return (
        <>
            <GlobalStyle />
            <NavBar list={list} />
            <StylesHeader>
                <StylesLogo src={logo} alt="logo" />
            </StylesHeader>
            <StylesHome>
                <a href="/list/">
                    <button>Enter Star Wars experience</button>
                </a>
            </StylesHome>
        </>
    )
}

export default Home;