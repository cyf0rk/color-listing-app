import './ColorListElement.css';

const ColorListElement = ({ color, index, colorArray, provided }) => {
  const mainColorStylingCondition = index === colorArray.length - 1;
  return (
    <li
      className='colors-list__color'
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <span
        style={{
          color: `#${color.hex}`,
          fontWeight: mainColorStylingCondition && 'bold',
          fontSize: mainColorStylingCondition && '1.2rem',
        }}
      >
        {color.tags[0].name}: #{color.hex}
      </span>
    </li>
  );
};

export default ColorListElement;
