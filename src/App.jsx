import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [code1, setCode1] = useState("404")
  const [code2, setCode2] = useState("404")
  const txt = useRef(null)

  // fetch("https://http.cat/100")
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('error:', error))
  
  const showCat = () => {
    setCode1(txt.current.value)
  }

  const changePic = (event) => {
    setCode2(event.target.value)
  }

  return (
    <>
<div className="wrapper">
    <div id="container">
      <h1>Type a http status code! (button version) </h1>
      <div className="box">
        <img src={`https://http.cat/${code1}`} />
      </div>
      <input ref={txt} type="text1" />
      <button onClick={showCat}>Show Cat</button>
    </div>

    <div id="container">
      <h1>Type a http status code! (no button version) </h1>
      <div className="box">
        <img src={`https://http.cat/${code2}`} />
      </div>
      <input onChange={changePic} type="text2" id="text2" />
    </div>
</div>
    </>
  )
}

export default App
