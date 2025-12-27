"use client"

import { GenerateSkeletonCode } from "./CodeGenerator"
import { useEditor } from "../editor/EditorContext"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { useState } from "react"
import { highlighter } from "@/lib/shiki"
import { useTheme } from "next-themes"

const CodeBlock = () => {
    const { canvasTemplate } = useEditor()

    if (!canvasTemplate) return

    const code = GenerateSkeletonCode(canvasTemplate)
    const [copied, setCopied] = useState(false)
    const { theme } = useTheme()

    const fullCode = `import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonLayout() {
  return (
    <div className="relative">
${code?.split("\n").map(l => "      " + l).join("\n")}
    </div>
  )
}`

    const highlighted = highlighter.codeToHtml(fullCode, {
        lang: "javascript",
        theme: theme === "dark"
            ? "kanagawa-dragon"
            : "kanagawa-lotus",
    })

    async function handleCopy() {
        await navigator.clipboard.writeText(fullCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="flex flex-col h-full rounded-lg border bg-background min-h-0">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40 shrink-0">
                <span className="text-sm font-mono text-secondary">
                    SkeletonLayout.tsx
                </span>
                <Button size="sm" variant="ghost" onClick={handleCopy} className="h-7 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    {copied ? "Copied" : "Copy"}
                </Button>
            </div>

            {/* THIS is the only scroll container */}
            <div
                className="
      flex-1
      min-h-0
      overflow-auto
      bg-sidebar
      text-sm
      font-mono

      [&_pre]:m-0
      [&_pre]:p-4
      [&_pre]:box-border
    "
                dangerouslySetInnerHTML={{ __html: highlighted }}
            />
        </div>
    )
}

export default CodeBlock
