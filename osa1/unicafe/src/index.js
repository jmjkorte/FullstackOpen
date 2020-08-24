import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>(
  <div>
  <h2>{props.text}</h2>
  </div>
)

const StatisticLine = ({name, type}) => (
  <div>
    <table>
    <tr>
      <td>{name}</td>
      <td>{type}</td>  
    </tr>
    </table>
  </div>
)

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )




const App = () => {
 
  const [clicks, setClicks] = useState ({
    good: 0, neutral: 0, bad: 0, all: 0
  })

  const handleGoodClick = () => 
    setClicks({ ...clicks, good:clicks.good +1, all:clicks.all +1})

  const handleNeutralClick = () => 
    setClicks({ ...clicks, neutral:clicks.neutral +1, all:clicks.all +1})

  const handleBadClick = () => 
    setClicks({ ...clicks, bad:clicks.bad +1, all:clicks.all +1})

  let average = (clicks.good - clicks.bad) / clicks.all
  let positive = clicks.good / clicks.all * 100


  if (clicks.all == 0){
    return (
      <>
      <Header text= "Give feedback"/>
    
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text= "bad"/>
        
      <Header text="Statistics"/>
      <p> No feedback given</p>
      </>
    )
  } else {
  return (
    
    <>
    <Header text= "Give feedback"/>
    
    <Button handleClick={handleGoodClick} text="good"/>
    <Button handleClick={handleNeutralClick} text="neutral"/>
    <Button handleClick={handleBadClick} text= "bad"/>
      
    <Header text="Statistics"/>
    <StatisticLine name="good" type={clicks.good}/>
    <StatisticLine name="neutral" type={clicks.neutral}/>
    <StatisticLine name="bad" type={clicks.bad}/>  
    <StatisticLine name="all" type={clicks.all}/>
    <StatisticLine name="average" type={average}/>
    <StatisticLine name="positive" type={positive}/>
    
    </>
  )
  }  
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
