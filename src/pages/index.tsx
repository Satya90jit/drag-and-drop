import { ResponsiveCard } from "@/components/cards";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Drag and Drop Card</h1>
        <ResponsiveCard />
      </div>
    </DndProvider>
  );
}
