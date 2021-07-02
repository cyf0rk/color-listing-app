import fetchColor from './common/fetchColor';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [responseData, setResponseData] = useState({});
  const [click, setClick] = useState('');

  useEffect(async () => {
    let color = fetchColor();

    setResponseData(color);
    console.log(responseData);
  }, [click]);

  return (
    <div className='App'>
      <button onClick={setClick}>Change Color</button>
    </div>
  );
}

export default App;
