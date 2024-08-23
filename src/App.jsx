import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
      </div>
    </>
  )
}

export default App
