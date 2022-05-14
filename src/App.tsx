import { useState } from 'react'
import "reflect-metadata"
import './App.css'
import { Hello } from './Components/Hello'
import WithAppProviders from './WithAppProvider'

interface Props {
  children: React.ReactNode
}

function App(props: Props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hello />
    </div>
  )
}

export default WithAppProviders(App)();