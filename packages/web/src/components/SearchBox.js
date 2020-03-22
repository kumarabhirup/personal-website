import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form`
  padding-bottom: 40px;

  input {
    padding: 10px;
    border-radius: 6px;
    border: none;
  }
`

export default function SearchBox({ getSearchText, ...props }) {
  const [searchText, setSearchText] = useState('')

  return (
    <Form>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          name="search"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value)
            getSearchText(e.target.value)
          }}
        />
      </label>
    </Form>
  )
}

SearchBox.propTypes = {
  getSearchText: PropTypes.func.isRequired,
}
