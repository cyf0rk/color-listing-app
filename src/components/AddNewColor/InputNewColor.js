import './InputNewColor.css';

const InputNewColor = ({ onNewColorInput }) => {
  const newInputHandler = (input) => {
    let inputHex = input.target.value;
    if (input.key === 'Enter' && validateHexColor(inputHex)) {
      const newColor = {
        hex: inputHex,
        id: Symbol(inputHex).toString(),
        tags: [
          {
            name: 'testName',
          },
        ],
      };
      onNewColorInput(newColor);
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
