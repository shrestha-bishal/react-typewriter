import { useState } from 'react'
import './App.css'
import ReactTypewriter from '@bishal-shrestha/react-typewriter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [paused, setPaused] = useState(false)
  const [pauseMulti, setPauseMulti] = useState(false)

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

      {/* Main Showcase */}
      <section className="demo-section main-showcase">
        <ReactTypewriter
          lines={[
            'Introducing',
            '@bishal-shrestha/react-typewriter',
            'A customizable React component for elegant typing animations.',
            'Powered by TypeScript, built for modern UIs.',
            'Install via npm:',
            'npm i @bishal-shrestha/react-typewriter',
          ]}
          typingSpeed={60}
          eraseSpeed={30}
          lineDelay={800}
          eraseDelay={1500}
          loop
          showCursor
          style={{ minHeight: '180px' }}
        />
      </section>

      {/* Usage Variants */}
      <section className="demo-section">
        <h2>Usage Variants</h2>
        <div className="variants-grid">
          <div className="variant">
            <h3>Default Configuration</h3>
            <ReactTypewriter lines={['Typing with default speed and cursor.']} />
          </div>

          <div className="variant">
            <h3>Fast Typing & Erasing</h3>
            <ReactTypewriter
              lines={['Super fast animation!']}
              typingSpeed={20}
              eraseSpeed={20}
            />
          </div>

          <div className="variant">
            <h3>Custom Cursor Character</h3>
            <ReactTypewriter
              lines={['Custom cursor: >']}
              cursor=">"
              typingSpeed={50}
            />
          </div>

          <div className="variant">
            <h3>Custom Cursor React Node</h3>
            <ReactTypewriter
              lines={['Fancy cursor with emoji 🖋️']}
              cursor={<span style={{ color: 'cyan' }}>🖋️</span>}
              typingSpeed={50}
            />
          </div>

          <div className="variant">
            <h3>Hide Cursor</h3>
            <ReactTypewriter
              lines={['Cursor hidden for a clean look.']}
              showCursor={false}
              typingSpeed={40}
            />
          </div>

          <div className="variant">
            <h3>One-Time Typing (No Loop)</h3>
            <ReactTypewriter
              lines={['This text types once and stops.']}
              loop={false}
              typingSpeed={40}
              eraseSpeed={30}
            />
          </div>

          <div className="variant" style={{ gridColumn: '1 / -1' }}>
            <h3>Multi-line Text with Loop</h3>
            <ReactTypewriter
              lines={[
                'Line 1: React is powerful.',
                'Line 2: Typewriter effects are cool.',
                'Line 3: This is all animated!',
              ]}
              typingSpeed={50}
              lineDelay={600}
              eraseDelay={2000}
              loop
            />
          </div>

          <div className="variant" style={{ gridColumn: '1 / -1' }}>
            <h3>Callbacks on Events</h3>
            <ReactTypewriter
              lines={['Check the console for callbacks on typing and loop.']}
              onLineTyped={(i) => console.log(`Line ${i + 1} typed.`)}
              onLoopComplete={() => console.log('Typing loop completed.')}
              typingSpeed={40}
              eraseSpeed={20}
            />
          </div>
        </div>
      </section>

      {/* Interactivity */}
      <section className="demo-section">
        <h2>Pause & Resume Typing</h2>
        <ReactTypewriter
          lines={['You can pause and resume typing interactively!']}
          pause={paused}
          typingSpeed={60}
        />
        <button onClick={() => setPaused(!paused)} className="pause-button">
          {paused ? 'Resume' : 'Pause'}
        </button>
      </section>

      {/* Styling & Accessibility */}
      <section className="demo-section">
        <h2>Styling and Accessibility</h2>
        <p>
          You can customize the style, className, and provide any React node as cursor.
          The component uses <code>aria-live="polite"</code> and <code>aria-atomic="true"</code> for accessibility.
        </p>
        <ReactTypewriter
          lines={[
            'Styled with custom colors.',
            'Accessible with ARIA live regions.',
            'Flexible cursor options.',
          ]}
          typingSpeed={45}
          eraseSpeed={25}
          lineDelay={700}
          eraseDelay={1200}
          style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '1.2rem' }}
          cursor={<span style={{ color: '#ff3300' }}>▮</span>}
        />
      </section>

      {/* Performance and Behavior */}
      <section className="demo-section">
        <h2>Performance & Behavior</h2>
        <p>
          The component resets gracefully when the <code>lines</code> prop changes,
          supports pausing, and cleanly loops based on the <code>loop</code> prop.
          Typing and erasing speeds are adjustable for smooth animations.
        </p>
        <ReactTypewriter
          lines={['Typing resets on lines update.', 'Pause support included.', 'Adjust speeds easily.']}
          typingSpeed={50}
          eraseSpeed={40}
          lineDelay={600}
          eraseDelay={1400}
          loop
          pause={pauseMulti}
        />
        <button onClick={() => setPauseMulti(!pauseMulti)} className="pause-button">
          {pauseMulti ? 'Resume Multi-line' : 'Pause Multi-line'}
        </button>
      </section>

      {/* Footer */}
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
