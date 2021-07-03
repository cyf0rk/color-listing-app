import FetchColor from './common/FetchColor';
import ColorList from './components/ColorList';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [colorData, changeColor] = useState('');

  const changeColorHandler = () => {
    FetchColor(changeColor);
  };

  return (
    <div className='App'>
      <button onClick={changeColorHandler}>
        {colorData ? colorData.tags[0].name : 'Change Color'}
      </button>
      <ColorList color={colorData} />
    </div>
  );
}

export default App;
