import { DraggableCard } from "@/components/drag-drop";
import { Button } from "@mui/material";
import Link from "next/link";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Drag and Drop Card</h1>
        <Button>
          <Link
            href={"/tasks/draggable-list"}
            className="px-4 py-1 border border-gray-200 rounded-md text-sm bg-gray-100 hover:bg-gray-200/70"
          >
            Draggable List
          </Link>
        </Button>
        <DraggableCard />
      </div>
    </DndProvider>
  );
}
