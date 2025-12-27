import { Button } from '../ui/button'
import { useEditor } from '../editor/EditorContext'
import { GrPowerReset } from "react-icons/gr";

const CanvasResetButton = () => {
    const { resetCanvas } = useEditor()
    return (
        <Button
            variant={"ghost"}
            className='flex items-center justify-center gap-x-1.5'
            onClick={()=>{
                resetCanvas()
            }}
        >
            <GrPowerReset />
            Reset
        </Button>
    )
}

export default CanvasResetButton