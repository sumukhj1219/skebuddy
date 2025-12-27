import { cn } from "@/lib/utils";
import React from "react";
import Container from "../common/Container";
import { FiGithub } from "react-icons/fi";

interface EditorRightPanelProps {
  className?: string;
}

const EditorRightPanel = ({ className }: EditorRightPanelProps) => {
  return (
    <Container
      className={cn(
        "flex flex-col md:p-2 items-center justify-center border-l ",
        className,
      )}
    ></Container>
  );
};

export default EditorRightPanel;
