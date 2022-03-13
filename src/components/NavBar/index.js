import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './index.scss'

const navitems = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Contact', path: '/contact'},
  {name: 'Login', path: '/login'},
]

const NavBar = () => (
  <>
    <div className="container-fluid outer">
      <div className="container inner">
        <Link to="./" className="logo-link">
          <img className="header-logo" src={logo} alt="ReadM" />
        </Link>
        {navitems.map(item => (
          <Link to={item.path} key={item.name} className="nav-link">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </>
)

export default NavBar
