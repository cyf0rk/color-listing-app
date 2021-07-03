const FetchColor = async (setNewColor, colorsData) => {
  const response = await fetch(
    'https://www.colr.org/json/color/random?t=' + Date.now()
  );
  const data = await response.json();
  const [color] = data.colors;
  if (color.hex.length > 2 && !colorsData.includes(color)) {
    typeof colorsData === 'object'
      ? setNewColor([...colorsData, color])
      : setNewColor([color]);
  } else {
    console.log('Error: This color is not valid');
  }
};

export default FetchColor;
