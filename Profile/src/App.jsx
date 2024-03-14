import { useState } from 'react'
import Profile from './components/profile';
import StudentForm  from './apis/Api';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />
      <StudentForm/>
    </>
  )
}

export default App
