import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [code1, setCode1] = useState("404")
  const [code2, setCode2] = useState("404")
  const txt = useRef('404')

  return (
    <>
<div className="wrapper">
    <div id="container">
      <h1>Type a http status code! (button version) </h1>
      <div className="box">
        <img src={`https://http.cat/${code1}`} />
      </div>
      <input ref={txt} type="text1" />
      <button onClick={() => setCode1(txt.current.value)}>Show Cat</button>
    </div>

    <div id="container">
      <h1>Type a http status code! (no button version) </h1>
      <div className="box">
        <img src={`https://http.cat/${code2}`} />
      </div>
      <input onChange={(e) => setCode2(e.target.value)} type="text2" id="text2" />
    </div>
</div>
    </>
  )
}

export default App
