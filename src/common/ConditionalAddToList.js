const ConditionalAddToList = (newColor, currentColors, addNewColor) => {
  if (newColor.hex.length > 2 && !currentColors.includes(newColor)) {
    typeof currentColors === 'object'
      ? addNewColor([...currentColors, newColor])
      : addNewColor([newColor]);
  } else {
    console.log('Error: This color is not valid');
  }
};

export default ConditionalAddToList;
