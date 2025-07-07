import { useMemo, useState, useEffect } from 'react'
import './App.css'
import ReactTypewriter from '@bishal-shrestha/react-typewriter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [paused, setPaused] = useState(false)
  const [pauseMulti, setPauseMulti] = useState(false)

  const mainLines = useMemo(() => [
    'Introducing',
    '@bishal-shrestha/react-typewriter',
    'A customisable React component for elegant typing animations.',
    'Powered by TypeScript, built for modern UIs.',
    'Install via npm:',
    'npm i @bishal-shrestha/react-typewriter',
  ], [])

  const defaultLines = useMemo(() => [
    'Typing with default speed and cursor.'
  ], [])

  const fastLines = useMemo(() => [
    'Super fast animation!'
  ], [])

  const customCursorChar = useMemo(() => [
    'Custom cursor: >'
  ], [])

  const customCursorNode = useMemo(() => [
    'Fancy cursor with emoji 🖋️'
  ], [])

  const hideCursorLines = useMemo(() => [
    'Cursor hidden for a clean look.'
  ], [])

  const oneTimeLines = useMemo(() => [
    'This text types once and stops.'
  ], [])

  const multiLineLoop = useMemo(() => [
    'Line 1: React is powerful.',
    'Line 2: React Typewriter effects are cool.',
    'Line 3: This is all animated!',
  ], [])

  const callbackLines = useMemo(() => [
    'Check the console for callbacks on typing and loop.'
  ], [])

  const pauseLines = useMemo(() => [
    'You can pause and resume typing interactively!'
  ], [])

  const codingLines = useMemo(() => [
    "const greet = (name) => `Hello, ${name}`;",
    "console.log(greet('World'));",
  ], []);

  const stylingLines = useMemo(() => [
    'Styled with custom colors.',
    'Accessible with ARIA live regions.',
    'Flexible cursor options.',
  ], [])

  const performanceLines = useMemo(() => [
    'Typing resets on lines update.',
    'Pause support included.',
    'Adjust speeds easily.'
  ], [])

  const [messageIndex, setMessageIndex] = useState(0)
  const [input, setInput] = useState('Type your text here...')
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const intlLines = useMemo(() => [
    '你好，世界！',
    'नमस्ते संसार!',
    'مرحبا بالعالم!',
    'Bonjour le monde!'
  ], [])

  const oneCharPerLine = useMemo(() => 'Hi'.split(''), [])

  const reversedLines = useMemo(() => ['!dlroW ,olleH'], [])

  const dynamicMessages = useMemo(() => [
    ['First message shown.'],
    ['Now showing the second message!'],
    ['And here is the third.']
  ], [])

  const terminalLines = useMemo(() => [
    'user@host:~$ echo "React Typewriter rocks!"',
    'React Typewriter rocks!',
  ], []);

  const currentTimeLine = useMemo(() => [`Current Time: ${time}`], []);

  const liveInputLine = useMemo(() => [input], [input]);
  
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="container">
      <header className="header">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>React Typewriter</h1>
        <p className="subtitle">
          A flexible and scalable React component for animated typing effects.
        </p>
      </header>

      <section className="demo-section main-showcase">
        <ReactTypewriter
          lines={mainLines}
          typingSpeed={60}
          eraseSpeed={30}
          lineDelay={800}
          eraseDelay={1500}
          loop
          showCursor
          style={{ minHeight: '180px' }}
        />
      </section>

      <section className="demo-section">
        <h2>Usage Variants</h2>
        <div className="variants-grid">

          <div className="variant -sm">
            <div>
              <h3>Code Typing Simulation</h3>
              <ReactTypewriter
                lines={codingLines}
                typingSpeed={40}
                eraseSpeed={25}
                lineDelay={700}
                eraseDelay={2000}
                loop
                style={{
                  backgroundColor: '#1e1e1e',
                  color: '#d4d4d4',
                  padding: '1rem',
                  borderRadius: '6px',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.9rem',
                  textAlign: 'left',
                }}
                cursor={<span style={{ color: '#00ff00' }}>|</span>}
              />
            </div>
          </div>

          <div className="variant -sm">
            <div>
              <h3>Default Configuration</h3>
              <ReactTypewriter lines={defaultLines} />
            </div>
          </div>

          <div className="variant -sm">
            <div>
              <h3>Fast Typing & Erasing</h3>
              <ReactTypewriter
                lines={fastLines}
                typingSpeed={20}
                eraseSpeed={20}
              />
            </div>
          </div>

          <div className="variant -sm">
            <div>
              <h3>Custom Cursor Character</h3>
              <ReactTypewriter
                lines={customCursorChar}
                cursor=">"
                typingSpeed={50}
              />
            </div>
          </div>

          <div className="variant -sm">
            <div>
              <h3>Custom Cursor React Node</h3>
              <ReactTypewriter
                lines={customCursorNode}
                cursor={<span style={{ color: 'cyan' }}>🖋️</span>}
                typingSpeed={50}
              />
            </div>
          </div>

          <div className="variant -sm">
            <div>
              <h3>Hide Cursor</h3>
              <ReactTypewriter
                lines={hideCursorLines}
                showCursor={false}
                typingSpeed={40}
              />
            </div>
          </div>

          <div className="variant -sm">
            <div>
              <h3>One-Time Typing (No Loop)</h3>
              <ReactTypewriter
                lines={oneTimeLines}
                loop={false}
                typingSpeed={40}
                eraseSpeed={30}
              />
            </div>
          </div>

          <div className="variant -sm" style={{ gridColumn: '1 / -1' }}>
            <div>
              <h3>Multi-line Text with Loop</h3>
              <ReactTypewriter
                lines={multiLineLoop}
                typingSpeed={50}
                lineDelay={600}
                eraseDelay={2000}
                loop
              />
            </div>
          </div>

          <div className="variant -sm" style={{ gridColumn: '1 / -1' }}>
            <div>
              <h3>Callbacks on Events</h3>
              <ReactTypewriter
                lines={callbackLines}
                onLineTyped={(i) => console.log(`Line ${i + 1} typed.`)}
                onLoopComplete={() => console.log('Typing loop completed.')}
                typingSpeed={40}
                eraseSpeed={20}
              />
            </div>
          </div>

          <section className="variant -sm">
            <div>
              <h3>One character per line</h3>
              <ReactTypewriter
                lines={oneCharPerLine}
                typingSpeed={80}
                lineDelay={300}
                eraseSpeed={30}
                eraseDelay={1200}
                loop
              />
            </div>
          </section>

          <section className="variant -sm">
            <div>
              <h3>Reverse typing</h3>
              <ReactTypewriter
                lines={reversedLines}
                typingSpeed={60}
                showCursor
              />
            </div>
          </section>

          <section className="variant -sm">
            <div>
              <h3>Live input typing</h3>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="type-input"
              />
            </div>
            <ReactTypewriter lines={liveInputLine} typingSpeed={60} />
          </section> 

          <section className="variant -sm">
            <div>
              <h3>Current Time</h3>
              <ReactTypewriter lines={currentTimeLine}
                typingSpeed={60}
                loop={false} 
            />
            </div>
          </section> 

          <section className="variant -md">
            <div>
              <h3>Multilingual typing</h3>
              <ReactTypewriter
                lines={intlLines}
                typingSpeed={50}
                eraseSpeed={40}
                lineDelay={800}
                eraseDelay={1500}
                loop
              />
            </div>
          </section>

          <section className="variant -md"
            style={{ background: '#000', padding: '1rem', borderRadius: '8px' }}>
            <div>
              <h3 style={{ color: '#0f0' }}>Terminal-style animation</h3>
              <ReactTypewriter
                lines={terminalLines}
                typingSpeed={40}
                eraseSpeed={10}
                lineDelay={800}
                eraseDelay={5000}
                loop
                style={{ color: '#0f0', fontFamily: 'Courier New' }}
                cursor={<span style={{ color: '#0f0' }}>|</span>}
              />
            </div>
          </section>

          <section className="variant -md">
            <div>
              <h3>Pause & Resume Typing</h3>
              <ReactTypewriter
                lines={pauseLines}
                pause={paused}
                typingSpeed={60}
              />
            </div>
            <button onClick={() => setPaused(!paused)} className="pause-button">
              {paused ? 'Resume' : 'Pause'}
            </button>
          </section> 

          <section className="variant -md">
            <div>
              <h3>Dynamic message switching</h3>
              <ReactTypewriter
                lines={dynamicMessages[messageIndex]}
                typingSpeed={50}
                eraseSpeed={30}
                lineDelay={600}
                eraseDelay={1000}
                loop={false}
                key={messageIndex}
              />
            </div>
            <button
              onClick={() => setMessageIndex((i) => (i + 1) % dynamicMessages.length)}
              className="pause-button"            >
              Next Message
            </button>
          </section> 

          <section className="variant -lg">
            <div>
              <h3>Performance & Behavior</h3>
              <p>
                The component resets gracefully when the <code>lines</code> prop changes,
                supports pausing, and cleanly loops based on the <code>loop</code> prop.
                Typing and erasing speeds are adjustable for smooth animations.
              </p>
              <ReactTypewriter
                lines={performanceLines}
                typingSpeed={50}
                eraseSpeed={40}
                lineDelay={600}
                eraseDelay={1400}
                loop
                pause={pauseMulti}
              />
            </div>
            <button onClick={() => setPauseMulti(!pauseMulti)} className="pause-button">
              {pauseMulti ? 'Resume Multi-line' : 'Pause Multi-line'}
            </button>
          </section>  

          <section className="variant -lg">
            <div>
              <h3>Styling and Accessibility</h3>
              <p>
                You can customise the style, className, and provide any React node as cursor.
                The component uses <code>aria-live="polite"</code> and <code>aria-atomic="true"</code> for accessibility.
              </p>
              <ReactTypewriter
                lines={stylingLines}
                typingSpeed={45}
                eraseSpeed={25}
                lineDelay={700}
                eraseDelay={1200}
                style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '0.9rem' }}
                cursor={<span style={{ color: '#ff3300' }}>▮</span>}
              />
            </div>
          </section>
        </div>
      </section>    

      <footer className="footer">
        <p>
          View on{' '}
          <a
            href="https://github.com/shrestha-bishal/react-typewriter"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{' '}
          · Install with <code>npm i @bishal-shrestha/react-typewriter</code>
        </p>
      </footer>
    </div>
  )
}

export default App
