import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>(
  <div>
  <h2>{props.text}</h2>
  </div>
)




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text= "Give feedback"/>
      <button onClick={() => setGood (good +1)}>
        good 
      </button>
      <button onClick={() => setNeutral (neutral +1) </button>
      <button huono={handleBad}>bad</button>
    </div>
  )
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
