import {useState, createContext} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './styles.scss'
import './card.scss'

const stories = [
  {
    id: 0,
    title: 'My awesome grandpa',
    author: 'Maor Farhi',
    image: 'https://cdn-icons-png.flaticon.com/512/3553/3553896.png',
  },
  {
    id: 1,
    title: 'Cotton Candy',
    author: 'Adi Erez',
    image: 'https://cdn-icons-png.flaticon.com/512/1164/1164192.png',
  },
  {
    id: 2,
    title: 'Who is my friend?',
    author: 'Jade Mathieson',
    image: 'https://cdn-icons-png.flaticon.com/512/4470/4470942.png',
  },
  {
    id: 3,
    title: 'There Must Be a Rainbow',
    author: 'Nerissa Govender',
    image: 'https://cdn-icons-png.flaticon.com/512/673/673890.png',
  },
  {
    id: 4,
    title: 'A Deer',
    author: 'Guy Farhi',
    image: 'https://cdn-icons-png.flaticon.com/512/2223/2223053.png',
  },
  {
    id: 5,
    title: 'הבובה טלי',
    author: 'עדי ארז פרחי',
    image: 'https://cdn-icons-png.flaticon.com/512/351/351114.png',
  },
]

function previous() {}
function next() {}

const Cards = () => (
  <>
    <div className="container-fluid card-row-outer">
      <div className="container card-row-inner">
        <div className="card-row-endcap left">
          <button type="button" className="arrow" onClick={() => previous()}>
            <FaChevronLeft className="icon" size={38} />
          </button>
        </div>
        {stories.map(item => (
          <CardItem
            key={item.id}
            title={item.title}
            author={item.author}
            image={item.image}
          />
        ))}
        <div className="card-row-endcap right">
          <button type="button" className="arrow" onClick={() => next()}>
            <FaChevronRight className="icon" size={38} />
          </button>
        </div>
      </div>
    </div>
  </>
)

const CardItem = ({title, author, image}) => (
  <div className="card-wrapper">
    <img className="card-image" src={image} alt={title} />
    <div className="card-title">{title}</div>
    <div className="card-author">{author}</div>
  </div>
)

export default Cards
