
export function formatHtmlToJsx(
  html: string,
  {
    baseIndent = 1,
    indentSize = 2,
  } = {}
): string {
  if (!html?.trim()) return "";

  const jsx = html
    .replace(/\bclass=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=")
    .replace(/>\s+</g, ">\n<")
    .trim();

  const lines = jsx.split("\n");
  let depth = 0;

  return lines
    .map((rawLine) => {
      const line = rawLine.trim();

      // Closing tag → reduce depth first
      if (line.startsWith("</")) {
        depth = Math.max(depth - 1, 0);
      }

      const indent =
        " ".repeat(indentSize * (baseIndent + depth));
      const formatted = indent + line;

      // Opening tag (not closing, not self-closing)
      if (
        line.startsWith("<") &&
        !line.startsWith("</") &&
        !line.endsWith("/>")
      ) {
        depth++;
      }

      return formatted;
    })
    .join("\n");
}
