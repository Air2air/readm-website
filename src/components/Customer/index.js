import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import logo from '../../assets/images/logo.svg'
import './index.scss'

const customerItems = [
  {
    title: 'ELL Students & their parents',
    description:
      'Kindergarten through 5th graders that recently relocated to the United States or another English speaking country, or are about to relocate and need to learn, speak and practice English',
    icon: 'code',
    linkText: '',
    linkHref: '',
  },
  {
    title: 'Kids Learning To Read English',
    description:
      'Children from pre-Kindergarten to 2nd grade who are learning to master reading out loud. ReadM is the most effective solution to motivate, teach and practice',
    icon: 'lock',
    linkText: '',
    linkHref: '',
  },
  {
    title: 'Authors & Content Creators',
    description:
      'ReadM is a platform for those seeking to publish books.  It allows their content to be tested and their books to be read by children and adults that are using our platform. What’s more, they can team up with graphic designers to create the best experience possible.',
    icon: 'diamond',
    linkText: '',
    linkHref: '',
  },
  {
    title: 'Schools, Teachers & Educators',
    description:
      'ReadM is an educational application and platform for practicing reading in a fun, creative way. Get real-time statistics and reports analyzing your progress and store your momentum. ReadM is also a platform for content publishing, allowing students to create and publish their own creations.',
    icon: 'cog',
    linkText: '',
    linkHref: '',
  },
  {
    title: 'Advertising',
    description:
      'ReadM is an advertising platform for any business seeking to gain exposure and market share of the immense educational marketplace.',
    icon: 'desktop',
    linkText: 'Interested In Collaboration?',
    linkHref: '#contact',
  },
  {
    title: 'English Learners',
    description:
      'You are an individual who wants to practice English Speaking, English Accent, Fluency and interested in building Confidence',
    icon: 'chain',
    linkText: 'Invite Me To Beta',
    linkHref: '#invite',
  },
]

const Customer = () => (
  <>
    {customerItems.map(item => (
      <div className="callout">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Link to={item.path} key={item.name} className="nav-link">
          {item.name}
        </Link>
      </div>
    ))}
  </>
)

export default Customer
