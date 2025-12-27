import Container from '../common/Container'
import { cn } from '@/lib/utils';
import { ModeToggle } from '../ui/mode-toggle';
import ExportCodeDialog from '../dialogs/ExportCodeDialog';
import CanvasResetButton from './CanvasResetButton';

interface CanvasHeaderProps {
  className?: string;
}

const CanvasHeader = ({ className }: CanvasHeaderProps) => {
  return (
    <Container
      className={cn(
        "md:max-h-[64px] h-32 flex items-center p-2 border-b ",
        className
      )}
    >
      <div className="ml-auto flex items-center gap-x-2 justify-center">
        <ModeToggle />
        <CanvasResetButton />
        <ExportCodeDialog />
      </div>
    </Container>
  )
}

export default CanvasHeader