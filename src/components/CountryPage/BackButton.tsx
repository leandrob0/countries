import { Link } from "react-router-dom";

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton() {
  return (
    <Link to="/" className="button-container">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back</p>
    </Link>
  )
}

export default BackButton