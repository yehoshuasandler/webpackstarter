import './styles.css'
import html from './Nav.html'

class Nav {
  constructor () {
    const element = document.createElement('nav')
    element.insertAdjacentHTML('beforeend', html)
    return element
  }
}

export default Nav
