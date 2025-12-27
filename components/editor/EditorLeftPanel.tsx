import { cn } from "@/lib/utils";
import Container from "../common/Container";
import EditorHeader from "./EditorHeader";
import { LeftSidebarConfig } from "@/configs/editor/LeftSidebarConfig";
import EditorLeftPanelFooter from "./EditorLeftPanelFooter";
import { EditorDraggableTemplate } from "./EditorDraggableTemplate";

interface EditorLeftPanelProps {
  className?: string;
}

const EditorLeftPanel = ({ className }: EditorLeftPanelProps) => {
  return (
    <Container className={cn("flex flex-col h-screen border-r", className)}>
      <EditorHeader title={"skebuddy"} className="md:h-16 h-8" />
      <div className="flex-1 overflow-y-auto md:px-4 md:pb-2 flex flex-col gap-2 md:py-4">
        {LeftSidebarConfig.map((trx) => (
          <div key={trx.id} className="flex flex-col">
            <EditorDraggableTemplate template={trx} />
          </div>
        ))}
      </div>
      <EditorLeftPanelFooter />
    </Container>
  );
};

export default EditorLeftPanel;
