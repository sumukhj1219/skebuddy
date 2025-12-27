import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PiBracketsCurlyBold } from "react-icons/pi";
import { useEditor } from "../editor/EditorContext"
import { Button } from "../ui/button";
import CodeBlock from "../code/CodeBlock";
import { CloudUpload } from "lucide-react";
import Empty from "../common/Empty";
import Installations from "../code/Installations";

const ExportCodeDialog = () => {
    const { canvasTemplate } = useEditor()

    const isEmpty = canvasTemplate === null

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="flex items-center gap-x-1.5 text-sm">
                    <PiBracketsCurlyBold className="w-4 h-4" />
                    Code
                </Button>
            </DialogTrigger>
            <DialogContent
                className="w-full !h-[60vh] overflow-auto"
                style={{ maxWidth: "50vw" }}
            >
                <DialogHeader>
                    <DialogTitle>Skeleton Code</DialogTitle>
                </DialogHeader>
                {isEmpty ? (
                    <Empty
                        icon={<CloudUpload className="h-8 w-8" />}
                        title="DRAG & DROP"
                        subTitle="Drag skeletons from the left sidebar"
                    />
                ) : (
                    <>
                        <Installations />
                        <CodeBlock />
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ExportCodeDialog
