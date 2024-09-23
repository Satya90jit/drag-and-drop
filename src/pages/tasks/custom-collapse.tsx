import React, { useState, useRef, useEffect } from "react";

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the content div
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-slate-200 shadow-md mx-24 my-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 text-green-900 font-semibold"
      >
        Click Here
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight }}
      >
        <div className="p-4 space-y-4">
          <p>
            This is the accordion content. It will expand based on its height,
            allowing the content to grow and shrink accordingly.
          </p>
          <p>
            Add as much content as you want here, and the accordion will adjust
            dynamically without a fixed height. This ensures a smooth and fluid
            animation.
          </p>
          <p>
            Add as much content as you want here, and the accordion will adjust
            dynamically without a fixed height. This ensures a smooth and fluid
            animation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
