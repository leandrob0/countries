import './Error.css';

function Error() {
  return (
    <div className="error-container">
        <p className='error-text'>There was an error loading the information, retry or go back.</p>
        <p className='error-text'>Click the logo to refresh.</p>
    </div>
  )
}

export default Error