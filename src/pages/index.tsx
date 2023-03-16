import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { CATS } from '@/data/cats'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Furry Friends</title>
        <meta name="description" content="Keep track of your cats!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-4 md:my-8 lg:my-12 flex-1 text-xs p-2 md:text-base font-semibold text-slate-700">
        <h1 className="text-xl">Your Friends</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {CATS.map((cat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex">
              <Image
                src={cat.image}
                alt={cat.name}
                width={96}
                height={96}
                className="w-24 h-24 mr-4 object-cover block flex-none"
              />
              <div>
                <h2 className="text-lg">{cat.name}</h2>

                <p className="text-slate-500">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
