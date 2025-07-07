import React from 'react';
export interface ReactTypewriterProps {
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
export default function ReactTypewriter({ lines, typingSpeed, lineDelay, eraseSpeed, eraseDelay, loop, showCursor, cursor, className, style, pause, onLineTyped, onLoopComplete, }: ReactTypewriterProps): import("react/jsx-runtime").JSX.Element;
