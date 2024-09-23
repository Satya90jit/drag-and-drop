import { DraggableList } from "@/components/drag-drop";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const sampleItems = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Next.js App" },
  { id: 3, text: "Implement Drag and Drop" },
  { id: 4, text: "Write Tests" },
  { id: 5, text: "Deploy the App" },
];

const DraggableListPage = () => {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Draggable List</h1>
      <Button>
        <Link
          href={"/tasks/drag-and-drop-card"}
          className="px-4 py-1 border border-gray-200 rounded-md text-sm bg-gray-100 hover:bg-gray-200/70"
        >
          Drag-Drop Card
        </Link>
      </Button>
      <div className="flex justify-center items-center h-full">
        <DraggableList items={sampleItems} />
      </div>
    </section>
  );
};

export default DraggableListPage;
