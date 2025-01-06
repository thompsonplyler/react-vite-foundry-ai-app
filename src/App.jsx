import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('http://localhost:5000/test').then((res) => res.json())
  console.log(response)

}

function App() {
  const [count, setCount] = useState(0)
  const [body, setBody] = useState('')

  return (
    <>
      <main>
        <section>{body}</section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="query">Ask anything</label>
            <input type="textbox" id="query" name="query" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}

export default App
