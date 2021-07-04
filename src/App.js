import FetchColor from './common/FetchColor';
import AddNewColor from './components/AddNewColor/AddNewColor';
import { useState } from 'react';
import ConditionalAddToList from './common/ConditionalAddToList';

import './App.css';
import { useEffect } from 'react';

function App() {
  const [colorsData, setNewColor] = useState('');
  const [error, setErrorMessage] = useState('');

  const changeColorHandler = async () => {
    const newFetchedColor = await FetchColor();
    ConditionalAddToList(
      newFetchedColor,
      colorsData,
      setNewColor,
      setErrorMessage
    );
  };

  useEffect(() => {
    setErrorMessage('');
  }, [setNewColor, colorsData]);

  const clearList = () => {
    setNewColor('');
  };

  return (
    <div className='app-container'>
      <AddNewColor
        onColorChange={changeColorHandler}
        colors={colorsData}
        onSetNewColor={setNewColor}
        setErrorMessage={setErrorMessage}
        error={error}
      />
      <button className='clear-list' onClick={clearList}>
        Clear List
      </button>
    </div>
  );
}

export default App;
