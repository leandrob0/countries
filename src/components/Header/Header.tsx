import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as moonLight } from "@fortawesome/free-regular-svg-icons";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggle } from "../../features/modeSlice";

const Header = () => {
  const mode = useAppSelector((state) => state.mode.value);
  const dispatch = useAppDispatch();

  const handleSwitch = () => {
    dispatch(toggle());
  };

  return (
    <header className="header">
      <h1 className="header__title" onClick={() => window.location.reload()}>Where in the world?</h1>
      <div className="header__mode-switch" onClick={handleSwitch}>
        <FontAwesomeIcon icon={mode === "dark" ? moonDark : moonLight} />
        <p className="mode-switch__text">Dark mode</p>
      </div>
    </header>
  );
};

export default Header;
