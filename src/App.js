import FetchColor from './common/FetchColor';
import ColorList from './components/ColorList';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import './App.css';

function App() {
  const [colorsData, setNewColor] = useState('');

  const changeColorHandler = () => {
    FetchColor(setNewColor, colorsData);
  };

  const onDragEndHandler = (currentDrag) => {
    if (!currentDrag.destination) {
      return;
    }
    const colors = Array.from(colorsData);

    const [recordedColor] = colors.splice(currentDrag.source.index, 1);

    colors.splice(currentDrag.destination.index, 0, recordedColor);

    setNewColor(colors);
  };

  return (
    <div className='App'>
      <button
        className='change-color-button'
        style={{
          color: colorsData && `#${colorsData[colorsData.length - 1].hex}`,
        }}
        onClick={changeColorHandler}
      >
        {typeof colorsData === 'object'
          ? colorsData[colorsData.length - 1].hex
          : 'Change Color'}
      </button>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <ColorList colors={colorsData} />
      </DragDropContext>
    </div>
  );
}

export default App;
