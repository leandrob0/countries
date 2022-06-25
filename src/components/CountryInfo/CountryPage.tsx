import { useParams } from 'react-router-dom';

import './CountryPage.css';

function CountryPage() {
    const { name } = useParams();
    console.log(name);
  return (
    <div>CountryPage</div>
  )
}

export default CountryPage