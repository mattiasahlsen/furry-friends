import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { CATS } from '@/data/cats'
import Cat from '@/features/cat/Cat'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Title from '@/components/Title'

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
      <Container>
        <Main>
          <Title type="h2">Your Friends</Title>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {CATS.map((cat, index) => (
              <Cat key={index} {...cat} />
            ))}
          </div>
        </Main>
      </Container>
    </>
  )
}
