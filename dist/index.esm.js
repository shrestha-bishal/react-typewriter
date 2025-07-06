import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function ReactTypewriter({ lines, typingSpeed = 50, lineDelay = 500, eraseSpeed = 30, eraseDelay = 1000, loop = true, showCursor = true, cursor = '|', className, style, pause = false, onLineTyped, onLoopComplete, }) {
    console.log('ReactTypewriter rendered');
    const [displayedLines, setDisplayedLines] = useState([]);
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
            onLineTyped === null || onLineTyped === void 0 ? void 0 : onLineTyped(lineIndex - 1);
        }
    }, [lineIndex, onLineTyped]);
    // Typing effect
    useEffect(() => {
        if (pause)
            return;
        if (isErasing)
            return;
        let timeout;
        if (lineIndex >= lines.length) {
            timeout = setTimeout(() => setIsErasing(true), eraseDelay);
        }
        else if (charIndex < lines[lineIndex].length) {
            timeout = setTimeout(() => {
                setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
        }
        else {
            timeout = setTimeout(() => {
                setDisplayedLines((prev) => [...prev, currentLine]);
                setCurrentLine('');
                setLineIndex((prev) => prev + 1);
                setCharIndex(0);
            }, lineDelay);
        }
        return () => clearTimeout(timeout);
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
    ]);
    // Erasing effect
    useEffect(() => {
        if (pause)
            return;
        if (!isErasing)
            return;
        const currentEraseLine = displayedLines[eraseLineIndex] || '';
        let timeout;
        if (eraseLineIndex < 0) {
            if (loop) {
                onLoopComplete === null || onLoopComplete === void 0 ? void 0 : onLoopComplete();
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
            timeout = setTimeout(() => {
                const newLine = currentEraseLine.slice(0, currentEraseLine.length - eraseCharIndex - 1);
                setDisplayedLines((prev) => {
                    const copy = [...prev];
                    copy[eraseLineIndex] = newLine;
                    return copy;
                });
                setEraseCharIndex((prev) => prev + 1);
            }, eraseSpeed);
        }
        else {
            timeout = setTimeout(() => {
                setEraseLineIndex((prev) => prev - 1);
                setEraseCharIndex(0);
            }, eraseSpeed);
        }
        return () => clearTimeout(timeout);
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
    return (jsxs("pre", { className: className, style: Object.assign({ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: 'white', background: 'transparent' }, style), "aria-live": "polite", "aria-atomic": "true", children: [displayedLines.map((line, i) => (jsx("div", { children: line }, i))), jsxs("div", { children: [currentLine, showCursor && jsx("span", { className: "cursor", children: cursor })] }), jsx("style", { children: `
        .cursor {
          display: inline-block;
          width: 10px;
          animation: blink 1s step-start 0s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      ` })] }));
}

export { ReactTypewriter as default };
//# sourceMappingURL=index.esm.js.map
