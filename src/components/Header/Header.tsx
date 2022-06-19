import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Where in the world?</h1>
            <div className='header__mode-switch'>
                <p>Dark mode</p>
            </div>
        </header>
    )
}

export default Header;