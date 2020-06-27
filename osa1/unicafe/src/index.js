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
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
