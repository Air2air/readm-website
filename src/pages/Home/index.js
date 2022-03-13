import Demo from '../../components/Demo'
import './index.scss'

const Home = () => (
  <div className="container">
    <Demo />

    <div className="d-flex flex-row justify-content-between align-items-center page-title fade-in two">
      <span>Home</span>
    </div>
    <div className="d-flex flex-column fade-in one" />
  </div>
)

export default Home
