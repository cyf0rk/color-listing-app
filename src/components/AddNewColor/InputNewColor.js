import { useState } from 'react';

import './InputNewColor.css';

const InputNewColor = () => {
  const [newInput, setNewInput] = useState('');

  const newInputHandler = (input) => {
    let isHex = validateHexColor(input.target.value);
    if (input.key === 'Enter' && isHex) {
      setNewInput(input.target.value);
      input.target.value = '';
    }
  };

  const validateHexColor = (input) => {
    if (input.length === 6 && !isNaN(Number('0x' + input))) {
      return true;
    } else {
      console.log('Entered value is not a valid hex color');
    }
  };

  return (
    <div className='input-new-color'>
      <input
        className='input-new-color__input'
        type='text'
        onKeyPress={newInputHandler}
        placeholder='Enter new hex color'
      />
    </div>
  );
};

export default InputNewColor;
