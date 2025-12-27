/**
 * Converts raw HTML to JSX-friendly, properly indented code.
 * Replaces `class` with `className` and adds line breaks/indentation.
 */
export function formatHtmlToJsx(html: string, indentLevel = 6): string {
  if (!html) return "";

  const indent = " ".repeat(indentLevel);

  const jsxHtml = html
    .replace(/\bclass=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=");

  return jsxHtml
    .replace(/></g, ">\n<")
    .split("\n")
    .map((line) => indent + line.trim())
    .join("\n");
}
