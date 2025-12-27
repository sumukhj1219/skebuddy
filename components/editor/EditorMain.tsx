"use client"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import EditorLayout from "./EditorLayout"
import { useEditor } from "./EditorContext"
import { EditorDraggableTemplate } from "./EditorDraggableTemplate"
import { v4 as uuid } from "uuid"

export const EditorMain = () => {
    const { dropTemplate, setActiveDraggingTemplate, activeDraggingTemplate } = useEditor()


    function handleDragStart(event: any) {
        const data = event.active.data.current

        const activator = event.activatorEvent.target as HTMLElement
        const rect = activator.getBoundingClientRect()

        setActiveDraggingTemplate({
            ...data,
            startX: event.activatorEvent.clientX,
            startY: event.activatorEvent.clientY,
            grabOffsetX: event.activatorEvent.clientX - rect.left,
            grabOffsetY: event.activatorEvent.clientY - rect.top,
        })
    }

    function handleDrop(event: any) {
        if (!activeDraggingTemplate) return
        if (!event.over || event.over.id !== "canvas") return

        const canvas = document.getElementById("canvas")
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()

        const x = rect.width / 2 - (activeDraggingTemplate?.width || 250) / 2
        const y = rect.height / 2 - (activeDraggingTemplate?.height || 720) / 2

        dropTemplate({
            ...activeDraggingTemplate,
            id: uuid(),
            x: x,
            y: y
        })
    }

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDrop}>
            <EditorLayout />
            <DragOverlay>
                {activeDraggingTemplate ? (
                    <EditorDraggableTemplate
                        template={activeDraggingTemplate}
                    />
                ) : null}
            </DragOverlay>
        </DndContext>
    )
}
