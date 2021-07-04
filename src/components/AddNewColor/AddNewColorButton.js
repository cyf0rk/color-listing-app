import './AddNewColorButton.css';

const AddNewColorButton = ({ onColorChange, colors }) => {
  return (
    <button
      className='change-color-button'
      style={{
        color: colors && `#${colors[colors.length - 1].hex}`,
      }}
      onClick={onColorChange}
    >
      {typeof colors === 'object'
        ? `#${colors[colors.length - 1].hex}`
        : 'Change Color'}
    </button>
  );
};

export default AddNewColorButton;
