import ShipList from '../components/shipsList/ShipsList';
import NavBar from '../components/navbar/NavBar';
import { GlobalStyle } from '../styled';

const ListPage = ({ list }) => {

    return (
        <>
            <GlobalStyle />
            <NavBar list={list} />
            <ShipList list={list} />
        </>
    )
}

export default ListPage;