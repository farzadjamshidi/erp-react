import { useState } from 'react'
import { I18nextProvider } from "react-i18next"
import "reflect-metadata"
import './App.css'
import { Hello } from './Components/Hello'
import i18n from './Configs/i18n'
import WithAppProviders from './WithAppProvider'

interface Props {
  children: React.ReactNode
}


function App(props: Props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Hello />
      </I18nextProvider>
    </div>
  )
}

export default WithAppProviders(App)();