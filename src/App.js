import FetchColor from './common/FetchColor';
import AddNewColor from './components/AddNewColor/AddNewColor';
import { useState } from 'react';
import ConditionalAddToList from './common/ConditionalAddToList';

import './App.css';

function App() {
  const [colorsData, setNewColor] = useState('');

  const changeColorHandler = async () => {
    const newFetchedColor = await FetchColor();
    ConditionalAddToList(newFetchedColor, colorsData, setNewColor);
  };

  const clearList = () => {
    setNewColor('');
  };

  return (
    <div className='app-container'>
      <AddNewColor
        onColorChange={changeColorHandler}
        colors={colorsData}
        onSetNewColor={setNewColor}
      />
      <button className='clear-list' onClick={clearList}>
        Clear List
      </button>
    </div>
  );
}

export default App;
