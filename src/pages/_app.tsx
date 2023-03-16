import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../store'
import { Signika } from 'next/font/google'
import classNames from 'classnames'

const signika = Signika({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div
          className={classNames(
            'min-h-screen flex flex-col justify-between bg-background text-p',
            signika.className
          )}
        >
          <header className="bg-background-light text-2xl font-semibold text-header">
            <div className="container py-4 px-2 mx-auto">Furry Friends</div>
          </header>
          <Component {...pageProps} />
          <footer className="bg-background-light flex justify-center">
            <p className="text-p py-2 font-semibold">© 2023 Mattias Ahlsén</p>
          </footer>
        </div>
      </PersistGate>
    </Provider>
  )
}
