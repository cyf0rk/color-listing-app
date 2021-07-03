const FetchColor = async (changeColor, colorData) => {
  const response = await fetch(
    'https://www.colr.org/json/color/random?t=' + Date.now()
  );
  const data = await response.json();
  const [color] = data.colors;
  typeof colorData === 'object'
    ? changeColor([...colorData, color])
    : changeColor([color]);
};

export default FetchColor;
