import Head from 'next/head'
import Cat from '@/features/cat/Cat'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Title from '@/components/Title'
import CreateCat from '@/features/cat/CreateCat'
import { useCats } from '@/features/cat/catHooks'
import Input from '@/components/Input'

export default function Home() {
  const { filteredCats: cats, query, setQuery } = useCats()

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
          <div className="flex justify-between items-center">
            <Title type="h2" className="text-header">
              Your Cats
            </Title>

            <Input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {cats.map((cat, index) => (
              <Cat key={index} cat={cat} />
            ))}
            <CreateCat />
          </div>
        </Main>
      </Container>
    </>
  )
}
