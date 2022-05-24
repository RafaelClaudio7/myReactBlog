import React from 'react'
import './styles.css'


export default function Header() {
  return (
    <header className='header-container'>
        <nav className='header-nav'>
            <span className='logo'>myReactBlog</span>
            <div className='search-container'>
                <label htmlFor="search-words">Search</label>
                <input type="text" name="search-words" id="search-words" placeholder='Type your search'/>
            </div>
        </nav>
    </header>
  )
}
