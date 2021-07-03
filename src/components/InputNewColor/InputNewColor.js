import { useState } from 'react';

import './InputNewColor.css';

const InputNewColor = () => {
  const [newInput, setNewInput] = useState('');

  const newInputHandler = (input) => {
    setNewInput(input.target.value);
  };

  return (
    <div className='input-new-color'>
      <input
        className='input-new-color__input'
        type='text'
        onKeyUp={newInputHandler}
        placeholder='Enter new hex color'
      />
    </div>
  );
};

export default InputNewColor;
