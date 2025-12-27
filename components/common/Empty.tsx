import React from "react"

interface EmptyProps {
  icon: React.ReactNode
  title?: string
  subTitle?: string
}

const Empty = ({ icon, title, subTitle }: EmptyProps) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 text-muted-foreground">
      <div className="text-4xl">{icon}</div>

      {title && (
        <span className="text-lg font-medium text-foreground">
          {title}
        </span>
      )}

      {subTitle && (
        <span className="text-sm text-muted-foreground">
          {subTitle}
        </span>
      )}
    </div>
  )
}

export default Empty
