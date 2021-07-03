const ColorListElement = ({ color, index, colorArray, innerRef }) => {
  return (
    <li
      style={{
        color: `#${color.hex}`,
        fontWeight: index === colorArray.length - 1 && 'bold',
        cursor: 'pointer',
      }}
      ref={innerRef}
    >
      {color.tags[0].name}: #{color.hex}
    </li>
  );
};

export default ColorListElement;
