const ColorList = ({ color }) => {
  return (
    <ul>
      <li>Loading colors...</li>
      {color && (
        <li
          style={{
            color: `#${color.hex}`,
            fontWeight: 'bold',
          }}
        >
          {color.tags[0].name}: {color.hex}
        </li>
      )}
    </ul>
  );
};

export default ColorList;
