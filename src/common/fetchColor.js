const FetchColor = async (changeColor, colorData) => {
  const response = await fetch(
    'https://www.colr.org/json/color/random?t=' + Date.now()
  );
  const data = await response.json();
  const [color] = data.colors;
  if (color.hex.length > 2 && !colorData.includes(color)) {
    typeof colorData === 'object'
      ? changeColor([...colorData, color])
      : changeColor([color]);
  } else {
    console.log('This color is empty');
  }
};

export default FetchColor;
