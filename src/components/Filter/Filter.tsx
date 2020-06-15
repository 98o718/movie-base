import React from 'react'
import { TextField } from '@material-ui/core'
import { ClassNames } from '@emotion/core'

type FilterProps = {
  search: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Filter = ({ search, handleChange }: FilterProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        <TextField
          className={css`
            background-color: #c5b2db;
            border-radius: 5px;

            .MuiOutlinedInput-root.Mui-focused
              .MuiOutlinedInput-notchedOutline {
              border-color: #581b99 !important;
            }

            .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
              border-color: #581b99 !important;
            }
          `}
          id="filter-textfield"
          variant="outlined"
          value={search}
          placeholder="Фильтр"
          onChange={handleChange}
        />
      )}
    </ClassNames>
  )
}

export default Filter
