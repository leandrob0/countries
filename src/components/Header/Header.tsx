import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as moonLight } from "@fortawesome/free-regular-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../features/modeSlice";
import { RootState } from "../../store";

const Header = () => {
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  const handleSwitch = () => {
    dispatch(toggle());
  };

  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <div className="header__mode-switch" onClick={handleSwitch}>
        <FontAwesomeIcon icon={mode === "dark" ? moonDark : moonLight} />
        <p className="mode-switch__text">Dark mode</p>
      </div>
    </header>
  );
};

export default Header;
