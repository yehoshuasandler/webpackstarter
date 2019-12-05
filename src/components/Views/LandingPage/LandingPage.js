import './styles.css'
import html from './LandingPage.html'

class LandingPage {
  constructor () {
    const element = document.createElement('div')
    element.insertAdjacentHTML('beforeend', html)
    return element
  }
}

export default LandingPage
