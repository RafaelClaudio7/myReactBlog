
import TextInput from '../TextInput/TextInput'
import './styles.css'



export default function Header() {
  return (
    <header className='header-container'>
        <nav className='header-nav'>
            <span className='logo'>myReactBlog</span>
            <div className='search-container'>
                <label htmlFor="search-words">Search</label>
                <TextInput/>
            </div>
        </nav>
    </header>
  )
}
