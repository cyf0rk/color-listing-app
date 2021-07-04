import InputNewColor from './InputNewColor';
import ColorList from '../ColorList/ColorList';
import AddNewColorButton from './AddNewColorButton';
import { DragDropContext } from 'react-beautiful-dnd';
import ConditionalAddToList from '../../common/ConditionalAddToList';

import Card from '../UI/Card';
import './AddNewColor.css';
import { useState, useEffect } from 'react';

const AddNewColor = ({ onColorChange, colors, onSetNewColor }) => {
  const [newInputColor, setNewInputColor] = useState('');

  useEffect(() => {
    typeof newInputColor === 'object' &&
      ConditionalAddToList(newInputColor, colors, onSetNewColor);
  }, [newInputColor]);

  const onDragEndHandler = (currentDrag) => {
    if (!currentDrag.destination) {
      return;
    }
    const colorsArr = Array.from(colors);

    const [recordedColor] = colorsArr.splice(currentDrag.source.index, 1);

    colorsArr.splice(currentDrag.destination.index, 0, recordedColor);

    onSetNewColor(colorsArr);
  };
  return (
    <div className='add-new-color-container'>
      <AddNewColorButton onColorChange={onColorChange} colors={colors} />
      <Card className='colors-list'>
        <DragDropContext onDragEnd={onDragEndHandler}>
          <ColorList colors={colors} />
        </DragDropContext>
      </Card>
      <InputNewColor onNewColorInput={setNewInputColor} />
    </div>
  );
};

export default AddNewColor;
