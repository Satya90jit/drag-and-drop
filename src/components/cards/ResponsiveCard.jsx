import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDrag, useDrop } from "react-dnd";

const sizes = [
  { label: "Min", value: "min" },
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
];

const sizeClasses = {
  min: "w-[30rem]",
  small: "w-[40rem]",
  medium: "w-[50rem]",
  large: "w-[60rem]",
};

const ResizableCard = () => {
  const [cardSize, setCardSize] = useState("medium");
  const [open, setOpen] = useState(true);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const [, drop] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const containerBoundingRect = document.body.getBoundingClientRect();

      if (delta) {
        const newX = Math.max(0, position.x + delta.x);
        const newY = Math.max(0, position.y + delta.y);

        const adjustedX = Math.min(newX, containerBoundingRect.width - 300);
        const adjustedY = Math.min(newY, containerBoundingRect.height - 400);

        setPosition({
          x: adjustedX,
          y: adjustedY,
        });
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { type: "card", left: position.x, top: position.y },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drop} // Use drop ref here
      className="relative w-full h-[85vh] bg-gray-100"
      style={{ position: "relative" }}
    >
      <div
        ref={drag} // Use the drag ref
        className={`border shadow-lg bg-white rounded-lg p-4 flex flex-col transition-all duration-500 ease-in-out ${sizeClasses[cardSize]} overflow-hidden absolute`}
        style={{
          left: position.x,
          top: position.y,
          cursor: isDragging ? "move" : "pointer",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {sizes.map(({ label, value }) => (
              <Button
                key={value}
                variant="outlined"
                onClick={() => setCardSize(value)}
                className="text-sm px-2 py-1"
              >
                {label}
              </Button>
            ))}
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(!open)}
            className="text-sm px-2 py-1"
          >
            {open ? "Hide Calendar" : "Show Calendar"}
          </Button>
        </div>

        <Collapse in={open}>
          <div className="flex justify-center items-center w-full h-full py-5">
            <Calendar />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default ResizableCard;
