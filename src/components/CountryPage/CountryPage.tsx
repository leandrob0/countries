import './CountryPage.css';

import { useParams } from 'react-router-dom';
import BackButton from './BackButton';

function CountryPage() {
    const { name } = useParams();
    console.log(name);
  return (
    <div className='country-page-container'>
      <BackButton />
    </div>
  )
}

export default CountryPage