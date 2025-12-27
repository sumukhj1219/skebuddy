import { createHighlighter } from 'shiki'

export const highlighter = await createHighlighter({
  themes: ['kanagawa-dragon', 'kanagawa-lotus'],
  langs: ['javascript', 'typescript'],
 
})
