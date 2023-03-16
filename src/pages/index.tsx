import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { CATS } from '@/data/cats'
import Cat from '@/features/cat/Cat'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Title from '@/components/Title'
import CreateCat from '@/features/cat/CreateCat'
import { useState } from 'react'
import { ICat } from '@/features/cat/types'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cats, setCats] = useState<ICat[]>(CATS)

  return (
    <>
      <Head>
        <title>Furry Friends</title>
        <meta name="description" content="Keep track of your cats!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <Title type="h2">Your Fluffy Friends</Title>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {cats.map((cat, index) => (
              <Cat key={index} {...cat} />
            ))}
            <CreateCat onAdd={(cat) => setCats((prev) => [...prev, cat])} />
          </div>
        </Main>
      </Container>
    </>
  )
}
