import { cn } from "../lib/utils";

export function Spotlight({
  className,
}: {
  className?: string;
  duration?: number;
  xOffset?: number;
  translateY?: number;
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_35%_25%,rgba(222,219,200,0.065)_0%,rgba(222,219,200,0.015)_40%,transparent_70%)] animate-pulse" style={{ animationDuration: "8s" }} />
    </div>
  );
}
