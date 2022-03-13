import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './styles.scss'

const navitems = [
  {name: 'My Stories', path: '/'},
  {name: 'My Progress', path: '/about'},
  // {name: 'Contact', path: '/contact'},
  // {name: 'Login', path: '/login'},
]

const NavBar = () => (
  <>
    <div className="container-fluid outer">
      <div className="container inner">
        {navitems.slice(0, 1).map(item => (
          <Link to={item.path} key={item.name} className="nav-link">
            {item.name}
          </Link>
        ))}
        <Link to="./" className="logo-link">
          <img className="header-logo" src={logo} alt="ReadM" />
        </Link>
        {navitems.slice(1, 2).map(item => (
          <Link to={item.path} key={item.name} className="nav-link">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </>
)

export default NavBar
