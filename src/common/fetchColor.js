const fetchColor = async () => {
  const response = await fetch('https://www.colr.org/json/color/random');

  const data = await response.json();

  return data;
};

export default fetchColor;
