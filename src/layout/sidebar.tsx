"use client";
import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { ArrowUpDown } from "lucide-react";

interface SidebarProps {
  categories: string[];
  onReorder: (newOrder: string[]) => void;
  selected: string;
  onSelect: (cat: string) => void;
}

export default function Sidebar({
  categories,
  onReorder,
  selected,
  onSelect,
}: SidebarProps) {
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;
      const items = Array.from(categories);
      const [removed] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, removed);
      onReorder(items);
    },
    [categories, onReorder]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="sidebar">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2 "
          >
            {categories.map((cat, i) => (
              <Draggable draggableId={cat} index={i} key={cat}>
                {(prov) => (
                  <li
                    ref={prov.innerRef}
                    {...prov.draggableProps}
                    {...prov.dragHandleProps}
                    onClick={() => onSelect(cat)}
                    className={`cursor-pointer p-2 border border-[#D9D9D980] rounded flex items-center mx-auto lg:mx-0 gap-4 w-full h-[64px]  lg:w-[365px] lg:h-[72px]  ${
                      selected === cat ? "bg-[#FFC93E]" : ""
                    }`}
                  >
                    <span className="bg-[#FFFCF6] p-4 rounded-lg">
                      <ArrowUpDown color="#FFC93E" size={25} />
                    </span>
                    {cat}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
