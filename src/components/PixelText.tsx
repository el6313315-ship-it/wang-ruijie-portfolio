interface PixelMarkProps {
  className?: string;
}

interface PixelWordProps {
  text: string;
  className?: string;
}

export function PixelMark({ className = "" }: PixelMarkProps) {
  return (
    <span className={`pixel-mark ${className}`.trim()} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function PixelWord({ text, className = "" }: PixelWordProps) {
  return (
    <span className={className}>
      {text}
    </span>
  );
}
