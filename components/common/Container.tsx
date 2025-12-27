import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export default Container;
