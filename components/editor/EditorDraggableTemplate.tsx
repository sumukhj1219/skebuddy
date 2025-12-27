"use client";

import { useDraggable } from "@dnd-kit/core";
import { Template } from "@/types/template";
import Image from "next/image";

interface Props {
  template: Template;
}

export const EditorDraggableTemplate = ({ template }: Props) => {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: template.id,
    data: {
      uuid: template.id,
      ...template,
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab active:cursor-grabbing p-2"
    >
      <Image
        src={template.image}
        width={1024}
        height={1024}
        className="w-full h-full rounded"
        alt={template.name}
        priority
      />
    </div>
  );
};
