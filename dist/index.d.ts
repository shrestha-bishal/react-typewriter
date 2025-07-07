import React from 'react';
export interface TypewriterProps {
    lines: string[];
    typingSpeed?: number;
    lineDelay?: number;
    eraseSpeed?: number;
    eraseDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursor?: string | React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    pause?: boolean;
    onLineTyped?: (lineIndex: number) => void;
    onLoopComplete?: () => void;
}
export default function Typewriter({ lines, typingSpeed, lineDelay, eraseSpeed, eraseDelay, loop, showCursor, cursor, className, style, pause, onLineTyped, onLoopComplete, }: TypewriterProps): import("react/jsx-runtime").JSX.Element;
