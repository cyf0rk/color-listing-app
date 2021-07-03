const ColorList = ({ colors }) => {
  return (
    <ul>
      <li>Loading colors...</li>
      {colors &&
        colors.map((color) => (
          <li
            style={{
              color: `#${color.hex}`,
            }}
            key={color.id}
          >
            {}
            {color.tags[0].name}: #{color.hex}
          </li>
        ))}
    </ul>
  );
};

export default ColorList;
