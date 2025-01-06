import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const remote = process.env.VITE_REMOTE_HOST || import.meta.env.VITE_REMOTE_HOST
const path = '/api/prompt_openai'
console.log(remote)


function App() {
  const [count, setCount] = useState(0)
  const [body, setBody] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${remote}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: e.target.query.value
      })
    })
      .then((res) => res.json())
    console.log(response)
    await setBody(response.result)
  }

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
