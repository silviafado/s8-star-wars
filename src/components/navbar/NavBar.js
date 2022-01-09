import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { StylesNav, StylesNavUl, StylesNavLi, StylesNavDrop } from '../../components/navbar/NavBarStyles';

const NavBar = ({ id, list }) => {

    console.log(id);
    const [show, setShow] = useState(false);
    const showMenu = () => setShow(true);

    return (
        <StylesNav show={show}>
            <Link to="/">Home</Link>
            <Link to="/list">Starships List</Link>
            <div className='dropdown'>
                <StylesNavDrop onClick={showMenu}>Starship Profile</StylesNavDrop>
                {show ? (
                    <StylesNavUl>{list.map((ship, id) =>
                        <StylesNavLi key={id}>
                            <Link to={`/starships/${id}`} key={id} id={id} ship={ship}>
                                {ship.name.toUpperCase()}
                            </Link>
                        </StylesNavLi>
                    )}
                    </StylesNavUl>
                ) : null}
            </div>
        </StylesNav>
    )
}

export default NavBar;