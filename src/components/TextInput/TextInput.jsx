import './styles.css'

import React from 'react'

export default function TextInput({searchValue, handleChange}) {
  return (
    <input 
    type="search"
    onChange={handleChange}
    placeholder="Type your search"
    />
  )
}
