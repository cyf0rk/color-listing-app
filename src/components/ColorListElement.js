const ColorListElement = ({ color, index, colorArray, provided }) => {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <span
        style={{
          color: `#${color.hex}`,
          fontWeight: index === colorArray.length - 1 && 'bold',
        }}
      >
        {color.tags[0].name}: #{color.hex}
      </span>
    </li>
  );
};

export default ColorListElement;
