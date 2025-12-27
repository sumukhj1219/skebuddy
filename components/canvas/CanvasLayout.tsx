"use client";
import Container from "../common/Container";
import CanvasHeader from "./CanvasHeader";
import CanvasMain from "./CanvasMain";
import { cn } from "@/lib/utils";
import { useEditor } from "../editor/EditorContext";

interface CanvasLayoutProps {
  className?: string;
}

const CanvasLayout = ({ className }: CanvasLayoutProps) => {
  const { canvasTemplate } = useEditor();
  return (
    <Container className={cn("max-w-full w-full flex flex-col", className)}>
      <CanvasHeader />
      <CanvasMain canvasTemplate={canvasTemplate} />
    </Container>
  );
};

export default CanvasLayout;
