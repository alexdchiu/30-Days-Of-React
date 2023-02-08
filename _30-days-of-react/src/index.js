import React from 'react'
import ReactDOM from 'react-dom'
import leo from './images/leo.jpg'
import cssLogo from './images/css3.jpg'
import htmlLogo from './images/html-5.jpg'
import jsLogo from './images/javascript.jpg'
import reactLogo from './images/react.jpg'


const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started with React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Alex',
  lastName: 'Chiu'
}
const date = 'Feb 8, 2023'

const header = (
  <header className='header-wrapper'>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>By: {author.firstName} {author.lastName}</p>
    <small>Date: {date}</small>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1988
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old.
  </p>
)

const user = (
  <div>
    <img src={leo} alt='leo messi' />
  </div>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const techsImgs = (
  <div>
    <img src={cssLogo} alt="css logo" />
    <img src={htmlLogo} alt="html logo" />
    <img src={jsLogo} alt="JS logo" />
    <img src={reactLogo} alt="react logo" />
  </div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
      </p>
      <ul>
        {techsImgs}
      </ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const main2 = (
  <main>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to recieve news and updates.</p>
    <form>
      <label>
        <input type="text" placeholder='First Name'></input>
        <input type="text" placeholder='Last Name'></input>
        <input type="text" placeholder='Email'></input>
      </label>
    </form>
    <button>Subscribe</button>
  </main>
)

const copyRight = 'Copyright 2023'

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const app = (
  <div className='app'>
    {header}
    {main}
    {main2}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)