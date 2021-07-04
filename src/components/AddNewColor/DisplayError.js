import './DisplayError.css';

const DisplayError = ({ error }) => {
  return <div className='error-message'>{error && error}</div>;
};

export default DisplayError;
