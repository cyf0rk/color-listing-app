const FetchColor = async (changeColor) => {
  const response = await fetch(
    'https://www.colr.org/json/color/random?t=' + Date.now()
  );
  const data = await response.json();
  const [color] = data.colors;
  changeColor(color);
};

export default FetchColor;
