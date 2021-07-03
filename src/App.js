import FetchColor from './common/FetchColor';
import ColorList from './components/ColorList';
import { useState } from 'react';
import './App.css';

function App() {
  const [colorData, changeColor] = useState('');

  const changeColorHandler = () => {
    FetchColor(changeColor, colorData);
  };

  return (
    <div className='App'>
      <button className='change-color-button' onClick={changeColorHandler}>
        {typeof colorData === 'object'
          ? colorData[colorData.length - 1].hex
          : 'Change Color'}
      </button>
      <ColorList colors={colorData} />
    </div>
  );
}

export default App;
