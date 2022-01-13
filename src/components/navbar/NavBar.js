import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { StylesNav, StylesNavEl, StylesNavUl, StylesNavLi, StylesNavDrop } from '../../components/navbar/NavBarStyles';
import CloseButton from 'react-bootstrap/CloseButton';
import LoginModal from '../login/LoginModal';

const NavBar = ({ id, list }) => {

    console.log(id);
    const [show, setShow] = useState(false);
    const showMenu = () => setShow(true);
    const close = () => setShow(false);

    return (
        <StylesNav show={show}>
            <StylesNavEl><Link to="/">HOME</Link></StylesNavEl>
            <StylesNavEl><Link to="/list">STARSHIPS LIST</Link></StylesNavEl>
            <StylesNavEl className='dropdown'>
                <StylesNavDrop onClick={showMenu}>STARSHIPS PROFILE</StylesNavDrop>
                {show ? (
                    <StylesNavUl>
                        <StylesNavLi>
                            <CloseButton variant="white" aria-label="Close" onClick={close} />
                        </StylesNavLi>
                        {list.map((ship, id) =>
                            <StylesNavLi key={id}>
                                <Link to={`/starships/${id}`} key={id} id={id} ship={ship}>
                                    {ship.name.toUpperCase()}
                                </Link>
                            </StylesNavLi>
                        )}
                    </StylesNavUl>
                ) : null}
            </StylesNavEl>
            <StylesNavEl>
                <LoginModal />
            </StylesNavEl>
        </StylesNav>
    )
}

export default NavBar;