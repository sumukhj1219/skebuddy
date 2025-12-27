import { Template } from "@/types/template"
import { create } from "zustand"

export type DraggingTemplate = Template & {
  startX: number
  startY: number
  grabOffsetX: number
  grabOffsetY: number
}

type EditorState = {
  activeDraggingTemplate: DraggingTemplate | null
  canvasTemplate: Template | null
}

type EditorActions = {
  setActiveDraggingTemplate: (template: DraggingTemplate | null) => void
  dropTemplate: (template: Template) => void
  updateTemplate: (partial: Partial<Template>) => void
  resetCanvas: () => void
}

export const useEditor = create<EditorState & EditorActions>((set) => ({
  activeDraggingTemplate: null,
  canvasTemplate: null,

  setActiveDraggingTemplate: (template) =>
    set({ activeDraggingTemplate: template }),

  dropTemplate: (template) =>
    set({
      canvasTemplate: template,
      activeDraggingTemplate: null,
    }),

  updateTemplate: (partial) =>
    set((state) => ({
      canvasTemplate: state.canvasTemplate
        ? { ...state.canvasTemplate, ...partial }
        : null,
    })),

  resetCanvas: () =>
    set({
      activeDraggingTemplate: null,
      canvasTemplate: null,
    }),
}))
