import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import headshot from './src/assets/images/headshot.png'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
<img src={headshot} alt='headshot' />
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
