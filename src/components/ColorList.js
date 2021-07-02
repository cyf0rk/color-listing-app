const ColorList = ({ color }) => {
  return (
    <ul>
      <li>Loading colors...</li>
      {color && (
        <li>
          {color.tags[0].name}: {color.hex}
        </li>
      )}
    </ul>
  );
};

export default ColorList;
