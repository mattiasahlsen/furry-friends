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

export default function Home() {
  const [cats, setCats] = useState<ICat[]>(CATS)

  const updateCat = (index: number, cat: ICat) => {
    setCats((prev) => {
      const newCats = [...prev]
      newCats[index] = cat
      return newCats
    })
  }

  const removeCat = (index: number) => {
    setCats((prev) => {
      const newCats = [...prev]
      newCats.splice(index, 1)
      return newCats
    })
  }

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
          <Title type="h2">Your Furry Friends</Title>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {cats.map((cat, index) => (
              <Cat
                key={index}
                cat={cat}
                onUpdate={(newCat) => updateCat(index, newCat)}
                onRemove={() => removeCat(index)}
              />
            ))}
            <CreateCat onAdd={(cat) => setCats((prev) => [...prev, cat])} />
          </div>
        </Main>
      </Container>
    </>
  )
}
