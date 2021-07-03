import { Droppable, Draggable } from 'react-beautiful-dnd';

import ColorListElement from './ColorListElement';

const ColorList = ({ colors }) => {
  return (
    <Droppable droppableId='colors-list'>
      {(provided) => (
        <ul ref={provided.innerRef} {...provided.droppableProps}>
          {colors ? (
            colors.map((color, i, arr) => (
              <Draggable draggableId={color.hex} index={i} key={color.id}>
                {(provided) => (
                  <ColorListElement
                    color={color}
                    index={i}
                    colorArray={arr}
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))
          ) : (
            <li>Loading colors...</li>
          )}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default ColorList;
