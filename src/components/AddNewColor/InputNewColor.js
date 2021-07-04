import './InputNewColor.css';

const InputNewColor = ({ onNewColorInput, setErrorMessage }) => {
  const newInputHandler = (input) => {
    let inputHex = input.target.value;
    if (input.key === 'Enter' && validateHexColor(inputHex)) {
      const newColor = {
        hex: inputHex,
        id: new Date().valueOf(),
        tags: [
          {
            name: 'testName',
          },
        ],
      };
      onNewColorInput(newColor);
      setErrorMessage('');
      input.target.value = '';
    }
  };

  const validateHexColor = (input) => {
    if (input.length === 6 && !isNaN(Number('0x' + input))) {
      setErrorMessage('');
      return true;
    } else {
      setErrorMessage('Entered value is not a valid hex color');
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
