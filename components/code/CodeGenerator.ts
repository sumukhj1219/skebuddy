import { Template } from "@/types/template";

export function GenerateSkeletonCode(template: Template) {
  return document.getElementById(template.htmlId)?.innerHTML;
}
