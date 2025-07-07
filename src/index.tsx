import React, { useEffect, useState, useRef } from 'react';

export interface ReactTypewriterProps {
  lines: string[];
  typingSpeed?: number;   // ms per character typing
  lineDelay?: number;     // ms delay between lines typed
  eraseSpeed?: number;    // ms per character erasing
  eraseDelay?: number;    // ms delay before erase starts
  loop?: boolean;
  showCursor?: boolean;
  cursor?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  pause?: boolean;
  onLineTyped?: (lineIndex: number) => void;
  onLoopComplete?: () => void;
}

export default function ReactTypewriter({
  lines,
  typingSpeed = 50,
  lineDelay = 500,
  eraseSpeed = 30,
  eraseDelay = 1000,
  loop = true,
  showCursor = true,
  cursor = '|',
  className,
  style,
  pause = false,
  onLineTyped,
  onLoopComplete,
}: ReactTypewriterProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [eraseLineIndex, setEraseLineIndex] = useState(lines.length - 1);
  const [eraseCharIndex, setEraseCharIndex] = useState(0);

  // Reset when lines prop changes
  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLine('');
    setLineIndex(0);
    setCharIndex(0);
    setIsErasing(false);
    setEraseLineIndex(lines.length - 1);
    setEraseCharIndex(0);
  }, [lines]);

  // Notify when line typed
  useEffect(() => {
    if (lineIndex > 0) {
      onLineTyped?.(lineIndex - 1);
    }
  }, [lineIndex, onLineTyped]);

  // Typing effect
  useEffect(() => {
    if (pause) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }
    if (isErasing) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (lineIndex >= lines.length) {
      if (loop) {
        timeoutRef.current = setTimeout(() => setIsErasing(true), eraseDelay);
      } else {
        setDisplayedLines(lines);
        setCurrentLine('');
        return;
      }
    } else if (charIndex < lines[lineIndex].length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLine('');
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, lineDelay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [
    charIndex,
    lineIndex,
    currentLine,
    isErasing,
    lines,
    typingSpeed,
    lineDelay,
    eraseDelay,
    pause,
    loop,
  ]);

  // Erasing effect
  useEffect(() => {
    if (pause) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }
    if (!isErasing) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const currentEraseLine = displayedLines[eraseLineIndex] || '';

    if (eraseLineIndex < 0) {
      if (loop) {
        onLoopComplete?.();
        setDisplayedLines([]);
        setLineIndex(0);
        setCharIndex(0);
        setIsErasing(false);
        setEraseLineIndex(lines.length - 1);
        setEraseCharIndex(0);
        setCurrentLine('');
      }
      return;
    }

    if (eraseCharIndex < currentEraseLine.length) {
      timeoutRef.current = setTimeout(() => {
        const newLine = currentEraseLine.slice(
          0,
          currentEraseLine.length - eraseCharIndex - 1
        );
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[eraseLineIndex] = newLine;
          return copy;
        });
        setEraseCharIndex((prev) => prev + 1);
      }, eraseSpeed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setEraseLineIndex((prev) => prev - 1);
        setEraseCharIndex(0);
      }, eraseSpeed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [
    isErasing,
    eraseLineIndex,
    eraseCharIndex,
    displayedLines,
    eraseSpeed,
    lines.length,
    loop,
    onLoopComplete,
    pause,
  ]);

  return (
    <pre
      className={className}
      style={{
        margin: 0,
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        color: 'white',
        background: 'transparent',
        ...style,
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      {displayedLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <div>
        {currentLine}
        {showCursor && <span className="cursor">{cursor}</span>}
      </div>
      <style>{`
        .cursor {
          display: inline-block;
          width: 10px;
          animation: blink 1s step-start 0s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </pre>
  );
}