import React, { useState } from 'react'
import { useLocation } from 'wouter'

export const useSearchBox = () => {
  const [search, setSearch] = useState('')
  const [, setLocation] = useLocation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (search.trim() !== '' && e.key === 'Enter') {
      setSearch('')
      setLocation(`/search/${search.trim()}`)
    }
  }

  return { search, handleChange, handleSubmit }
}
