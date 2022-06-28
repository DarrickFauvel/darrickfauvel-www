import { ArrowDownIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className='container navbar-container'>
      <div className='navbar-brand'>
        <a href='#about' className='navbar-brand__link'>
          Darrick Fauvel
        </a>
      </div>
      <nav className='nav'>
        <a href='#projects' className='nav__link'>
          Portfolio
        </a>
        <a href='#skills' className='nav__link'>
          Skills
        </a>
        <a href='#contact' className='nav__link'>
          Contact
        </a>
        {/* <a href='#testimonials' className='nav__link'>
            Testimonials
          </a> */}
      </nav>
      <a href='#contact' className='nav-contact__link'>
        <div className='nav-contact__link--text'>
          <div>Hire Me</div>
          <div>
            <ArrowDownIcon className='nav-arrow' />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Navbar