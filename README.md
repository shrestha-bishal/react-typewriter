# React Typewriter
A customizable and lightweight React component that simulates a typewriter effect for a list of text lines. Supports typing, line-by-line animation, erasing, looping, and cursor styling.

[View Package in npm](https://www.npmjs.com/package/@bishal-shrestha/react-typewriter)

[View Website](https://react-typewriter-docs.netlify.app/)

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

App()
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
| `cursor`         | `string &#124; React.ReactNode` | `"&#124;"` | The cursor character or a custom React node |
| `className`      | `string`                         | `undefined` | Optional CSS class for the container                                        |
| `style`          | `React.CSSProperties`            | `undefined` | Optional inline styles for the container                                    |
| `pause`          | `boolean`                        | `false`     | Temporarily pauses typing or erasing                                        |
| `onLineTyped`    | `(lineIndex: number) => void`    | `undefined` | Callback fired when a line is completely typed                              |
| `onLoopComplete` | `() => void`                     | `undefined` | Callback fired after a full cycle when `loop` is enabled                    |

## Demo
[Demo Website](https://react-typewriter-docs.netlify.app/) https://react-typewriter-docs.netlify.app/
![1](https://github.com/user-attachments/assets/8193f092-e0ff-41df-b941-dc8cc45f91ac)
![2](https://github.com/user-attachments/assets/4bb3ce8a-ba7c-4ef4-86c7-dc11b9d6e1dd)
![3](https://github.com/user-attachments/assets/cbf209ae-8cc6-45db-8de2-dec509d9c341)

## Funding & Sponsorship
`@bishal-shrestha/react-typewriter` is an open-source project maintained with care, if you like to support the project please support me through the following:

[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Become%20a%20Sponsor-blueviolet?logo=githubsponsors&style=flat-square)](https://github.com/sponsors/shrestha-bishal)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support%20Developer-yellow?logo=buymeacoffee&style=flat-square)](https://www.buymeacoffee.com/shresthabishal)
[![Thanks.dev](https://img.shields.io/badge/Thanks.dev-Appreciate%20Open%20Source-29abe0?logo=github&style=flat-square)](https://thanks.dev/gh/shrestha-bishal)

## License

This project is licensed under the [MIT License](./LICENSE).

## Author
Bishal Shrestha 
[![GitHub](https://img.shields.io/badge/GitHub-Profile-black?logo=github)](https://github.com/shrestha-bishal)

[![Repo](https://img.shields.io/badge/Repository-GitHub-black?logo=github)](https://github.com/shrestha-bishal/react-typewriter)

[Website](https://react-typewriter-docs.netlify.app)

© 2025 Bishal Shrestha, All rights reserved
