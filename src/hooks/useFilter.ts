import React, { useState } from 'react'

export const useFilter = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return { search, handleChange }
}
