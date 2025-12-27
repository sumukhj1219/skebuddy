"use client"

import { cn } from "@/lib/utils"
import { useDroppable } from "@dnd-kit/core"
import Empty from "../common/Empty"
import { CloudUpload } from "lucide-react"
import { Template } from "@/types/template"

interface CanvasMainProps {
  className?: string
  canvasTemplate: Template | null
}

const CanvasMain = ({ canvasTemplate, className }: CanvasMainProps) => {
  const { setNodeRef } = useDroppable({ id: "canvas" })

  return (
    <div className="md:m-12 border rounded h-full">
      <div
        ref={setNodeRef}
        id="canvas"
        className={cn(
          "relative h-full w-full overflow-hidden cursor-crosshair",
          className
        )}
      >
        {
          canvasTemplate === null ? (
            <Empty
              icon={<CloudUpload className="h-8 w-8" />}
              title="DRAG & DROP"
              subTitle="Drag skeletons from the left sidebar"
            />
          ) : (
            <div
              key={canvasTemplate.id}
              className="absolute"
              style={{
                left: canvasTemplate?.x,
                top: canvasTemplate?.y,
              }}
            >
              <canvasTemplate.render />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CanvasMain
