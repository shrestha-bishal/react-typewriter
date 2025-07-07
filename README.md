# React Typewriter
A customizable and lightweight React component that simulates a typewriter effect for a list of text lines. Supports typing, line-by-line animation, erasing, looping, and cursor styling.

## Demo
https://react-typewriter-docs.netlify.app/

## Features
- Typewriter animation per character
- Multi-line support
- Optional erase and loop functionality
- Customizable speeds and delays
- Optional cursor and cursor customization
- Callbacks for line typed and loop completion
- Pause and resume control

## Installation
```bash
npm install @bishal-shrestha/react-typewriter
# or
yarn add @bishal-shrestha/react-typewriter
```

## Usage
```tsx
import ReactTypewriter from '@bishal-shrestha/react-typewriter';

function App() {
  return (
    <ReactTypewriter
      lines={['Hello, world!', 'This is a typewriter effect.']}
      typingSpeed={50}
      lineDelay={500}
      eraseSpeed={30}
      eraseDelay={1000}
      loop={true}
      showCursor={true}
      cursor="|"
    />
  );
}
```
## Props
| Prop             | Type                            | Default     | Description                                                                 |
|------------------|----------------------------------|-------------|-----------------------------------------------------------------------------|
| `lines`          | `string[]`                       | **Required**| Array of strings to type line-by-line                                       |
| `typingSpeed`    | `number`                         | `50`        | Typing speed in milliseconds per character                                  |
| `lineDelay`      | `number`                         | `500`       | Delay before moving to the next line (in ms)                                |
| `eraseSpeed`     | `number`                         | `30`        | Erasing speed in milliseconds per character                                 |
| `eraseDelay`     | `number`                         | `1000`      | Delay before starting to erase (in ms)                                      |
| `loop`           | `boolean`                        | `true`      | Whether to erase and restart after finishing all lines                      |
| `showCursor`     | `boolean`                        | `true`      | Whether to display the blinking cursor                                      |
| `cursor`         | `string \| React.ReactNode`      | `"|"`       | The cursor character or a custom React node                                 |
| `className`      | `string`                         | `undefined` | Optional CSS class for the container                                        |
| `style`          | `React.CSSProperties`            | `undefined` | Optional inline styles for the container                                    |
| `pause`          | `boolean`                        | `false`     | Temporarily pauses typing or erasing                                        |
| `onLineTyped`    | `(lineIndex: number) => void`    | `undefined` | Callback fired when a line is completely typed                              |
| `onLoopComplete` | `() => void`                     | `undefined` | Callback fired after a full cycle when `loop` is enabled                    |

