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
    <span className={className} aria-label={text}>
      {Array.from(text).map((char, index) =>
        char.toLowerCase() === "o" ? (
          <PixelMark key={`${char}-${index}`} className="pixel-letter" />
        ) : (
          <span key={`${char}-${index}`} aria-hidden="true">
            {char}
          </span>
        )
      )}
    </span>
  );
}
