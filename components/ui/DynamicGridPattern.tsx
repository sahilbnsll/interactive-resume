import { cn } from "@/lib/utils"

interface PatternProps {
  numOfRows?: number
  numOfCols?: number
  className?: string
}

export const DynamicGridPattern = ({
  numOfRows = 25,
  numOfCols = 25,
  className,
}: PatternProps) => {
  const rows = new Array(numOfRows).fill(1)
  const cols = new Array(numOfCols).fill(1)
  
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className="absolute -top-1/2 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 p-4"
    >
      {rows.map((_, i) => (
        <div key={`row` + i} className="relative h-8 w-16 border-l border-white/5 dark:border-white/10">
          {cols.map((_, j) => (
            <div
              key={`col` + j}
              className={cn(
                "relative h-8 w-16 border-r border-t border-white/5 bg-transparent transition-colors duration-1000 hover:bg-primary/20 hover:duration-0 dark:border-white/10 dark:hover:bg-primary/40",
                className
              )}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
