import ShipList from '../components/shipsList/ShipsList';
import NavBar from '../components/navbar/NavBar';
import { GlobalStyle } from '../styled';

const ListPage = ({ list, page, setPage }) => {

    return (
        <>
            <GlobalStyle />
            <NavBar list={list} />
            <ShipList list={list} page={page} setPage={setPage} />
        </>
    )
}

export default ListPage;