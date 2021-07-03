const ColorList = ({ colors }) => {
  return (
    <ul>
      {colors ? (
        colors.map((color, i, arr) => (
          <li
            style={{
              color: `#${color.hex}`,
              fontWeight: i === arr.length - 1 && 'bold',
            }}
            key={color.id}
          >
            {color.tags[0].name}: #{color.hex}
          </li>
        ))
      ) : (
        <li>Loading colors...</li>
      )}
    </ul>
  );
};

export default ColorList;
