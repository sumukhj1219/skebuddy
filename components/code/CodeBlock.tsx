"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { highlighter } from "@/lib/shiki";
import { useTheme } from "next-themes";
import { formatHtmlToJsx } from "@/lib/formatter";
import { useEditor } from "../editor/EditorContext";

const CodeBlock = () => {
  const { canvasTemplate } = useEditor();
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  if (!canvasTemplate) return null;

  const formattedJsx = useMemo(
    () =>
      formatHtmlToJsx(
        document.getElementById(canvasTemplate.htmlId)?.innerHTML || "",
      ),
    [canvasTemplate.htmlId],
  );

  const fullCode = useMemo(() => canvasTemplate.code || "", [canvasTemplate]);

  const highlighted = useMemo(
    () =>
      highlighter.codeToHtml(fullCode, {
        lang: "javascript",
        theme: theme === "dark" ? "kanagawa-dragon" : "kanagawa-lotus",
      }),
    [fullCode, theme],
  );

  async function handleCopy() {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-col h-full rounded-lg border bg-background min-h-0 ">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40 shrink-0">
        <span className="text-sm font-mono text-secondary">
          SkeletonLayout.tsx
        </span>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="h-7 gap-1"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <div
        className="flex-1 overflow-auto min-h-0 [&_pre]:h-full bg-sidebar text-sm font-mono [&_pre]:m-0 [&_pre]:p-4 [&_pre]:box-border"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
};

export default CodeBlock;
