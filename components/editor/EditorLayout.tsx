import Container from "../common/Container";
import EditorLeftPanel from "./EditorLeftPanel";
import EditorRightPanel from "./EditorRightPanel";
import CanvasLayout from "../canvas/CanvasLayout";

const EditorLayout = () => {
  return (
    <Container className="grid md:grid-cols-12 items-start justify-center">
      <EditorLeftPanel className="md:col-span-2" />
      <CanvasLayout className="md:col-span-8" />
      <EditorRightPanel className="md:col-span-2" />
    </Container>
  );
};

export default EditorLayout;
