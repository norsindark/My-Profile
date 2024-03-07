import { useState } from 'react'
import Profile from './components/profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />
    </>
  )
}

export default App
