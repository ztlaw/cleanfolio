import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'


const Header = () => {
  const { homepage, title, photo } = header
 // const logo = require('./src/assets/headshot.jpg')

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'> {title} 
                  <img src={photo} alt='headshot' /> 
          </a>
        ) : (
          title
        )}
      </h3>

      <Navbar />
    </header>
  )
}

export default Header
