import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-p">
      <header className="bg-background-light text-xl font-semibold text-header">
        <div className="container py-4 px-2 mx-auto">Furry Friends</div>
      </header>
      <Component {...pageProps} />
      <footer className="bg-background-light flex justify-center">
        <p className="text-p py-2 font-semibold">© 2023 Mattias Ahlsén</p>
      </footer>
    </div>
  )
}
