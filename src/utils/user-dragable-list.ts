"use client";

import { useCallback, useState } from "react";

export const useDraggableList = <T>() => {
  const [items, setItems] = useState<T[]>([]);

  const setInitialItems = useCallback((data: T[]) => {
    setItems(data);
  }, []);

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updated = [...items];
      const [removed] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, removed);
      setItems(updated);
    },
    [items]
  );

  return { items, moveItem, setInitialItems };
};
