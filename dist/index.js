'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function Typewriter({ lines, typingSpeed = 50, lineDelay = 500, eraseSpeed = 30, eraseDelay = 1000, loop = true, showCursor = true, cursor = '|', className, style, pause = false, onLineTyped, onLoopComplete, }) {
    const timeoutRef = react.useRef(null);
    const [displayedLines, setDisplayedLines] = react.useState([]);
    const [currentLine, setCurrentLine] = react.useState('');
    const [lineIndex, setLineIndex] = react.useState(0);
    const [charIndex, setCharIndex] = react.useState(0);
    const [isErasing, setIsErasing] = react.useState(false);
    const [eraseLineIndex, setEraseLineIndex] = react.useState(lines.length - 1);
    const [eraseCharIndex, setEraseCharIndex] = react.useState(0);
    // Reset when lines prop changes
    react.useEffect(() => {
        setDisplayedLines([]);
        setCurrentLine('');
        setLineIndex(0);
        setCharIndex(0);
        setIsErasing(false);
        setEraseLineIndex(lines.length - 1);
        setEraseCharIndex(0);
    }, [lines]);
    // Notify when line typed
    react.useEffect(() => {
        if (lineIndex > 0) {
            onLineTyped === null || onLineTyped === void 0 ? void 0 : onLineTyped(lineIndex - 1);
        }
    }, [lineIndex, onLineTyped]);
    // Typing effect
    react.useEffect(() => {
        if (pause) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            return;
        }
        if (isErasing)
            return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (lineIndex >= lines.length) {
            if (loop) {
                timeoutRef.current = setTimeout(() => setIsErasing(true), eraseDelay);
            }
            else {
                setDisplayedLines(lines);
                setCurrentLine('');
                return;
            }
        }
        else if (charIndex < lines[lineIndex].length) {
            timeoutRef.current = setTimeout(() => {
                setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
        }
        else {
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
    react.useEffect(() => {
        if (pause) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            return;
        }
        if (!isErasing)
            return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        const currentEraseLine = displayedLines[eraseLineIndex] || '';
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
            timeoutRef.current = setTimeout(() => {
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
    return (jsxRuntime.jsxs("pre", { className: className, style: Object.assign({ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: 'white', background: 'transparent' }, style), "aria-live": "polite", "aria-atomic": "true", children: [displayedLines.map((line, i) => (jsxRuntime.jsx("div", { children: line }, i))), jsxRuntime.jsxs("div", { children: [currentLine, showCursor && jsxRuntime.jsx("span", { className: "cursor", children: cursor })] }), jsxRuntime.jsx("style", { children: `
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

module.exports = Typewriter;
//# sourceMappingURL=index.js.map
