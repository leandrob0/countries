import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as moonDark } from '@fortawesome/free-solid-svg-icons';
import { faMoon as moonLight } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Where in the world?</h1>
            <div className='header__mode-switch'>
                <FontAwesomeIcon icon={moonDark} />
                <p className='mode-switch__text'>Dark mode</p>
            </div>
        </header>
    )
}

export default Header;