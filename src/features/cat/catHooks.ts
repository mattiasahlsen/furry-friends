import { useAppSelector } from '@/store'
import { useState } from 'react'
import { selectCats } from './catsSlice'

export function useCats() {
  const cats = Object.values(useAppSelector(selectCats))

  const [query, setQuery] = useState('')

  const filteredCats = cats.filter((cat) => {
    return (
      cat.name.toLowerCase().includes(query.toLowerCase()) ||
      cat.description.toLowerCase().includes(query.toLowerCase()) ||
      cat.gender.toLowerCase().includes(query.toLowerCase()) ||
      cat.birth.toLowerCase().includes(query.toLowerCase())
    )
  })

  return {
    cats,
    filteredCats,
    query,
    setQuery,
  }
}
