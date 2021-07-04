const ConditionalAddToList = (
  newColor,
  currentColors,
  addNewColor,
  setErrorMessage
) => {
  if (newColor.hex.length === 6) {
    switch (typeof currentColors) {
      case 'object':
        currentColors.find(({ hex }) => hex === newColor.hex)
          ? setErrorMessage('Color already exists in the list')
          : addNewColor([...currentColors, newColor]);
        break;
      default:
        addNewColor([newColor]);
        break;
    }
  } else {
    setErrorMessage('Generated hex color is not valid');
  }
};

export default ConditionalAddToList;
