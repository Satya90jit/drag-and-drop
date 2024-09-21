import React, { useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

const ItemType = "CARD";

const ListItem = ({ id, text, index, moveItem }) => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index; // Update the index to prevent repeated moves
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="border p-2 my-2 bg-white shadow-md cursor-move"
    >
      {text}
    </div>
  );
};

const DraggableList = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const draggedItem = items[dragIndex];
      setItems((prevItems) =>
        update(prevItems, {
          $splice: [
            [dragIndex, 1], // Remove item from its original position
            [hoverIndex, 0, draggedItem], // Insert into new position
          ],
        })
      );
    },
    [items]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[300px] p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Draggable List</h2>
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            id={item.id}
            index={index}
            text={item.text}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DraggableList;
