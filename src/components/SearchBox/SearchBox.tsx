import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { ClassNames } from '@emotion/core'

type SearchBoxProps = {
  search: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBox = ({ search, handleChange, handleSubmit }: SearchBoxProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        <TextField
          className={css`
            background-color: #c5b2db;
            border-radius: 5px;

            .MuiOutlinedInput-root.Mui-focused
              .MuiOutlinedInput-notchedOutline {
              border-color: #8c2ce2 !important;
            }

            .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
              border-color: #8c2ce2 !important;
            }
          `}
          id="search-textfield"
          variant="outlined"
          value={search}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}
    </ClassNames>
  )
}

export default SearchBox
