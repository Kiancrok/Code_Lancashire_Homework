import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img className='img1' src='/images/IMG_0278.JPG' alt='' />
    <img className='img2' src='/images/IMG_0282.JPG' alt=''/>
    <img className='img3' src='/images/IMG_0285.JPG' alt=''/>
      
      <h2>How many holes does Nigel have</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className='nigel'> nigel is the best car ever</p>
      
    </>

  )
}

export default App
