import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-yellow-400">
      <header className="bg-yellow-100 text-slate-800 text-xl font-semibold">
        <div className="container py-4 px-2 mx-auto">Furry Friends</div>
      </header>
      <Component {...pageProps} />
      <footer className="bg-yellow-100 flex justify-center">
        <p className="text-slate-800 py-2 font-semibold">
          © 2023 Mattias Ahlsén
        </p>
      </footer>
    </div>
  )
}
