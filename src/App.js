import './App.css'
import LandingPage from './components/Views/LandingPage/LandingPage.js'

class App {
  constructor () {
    const app = document.createElement('div')
    app.setAttribute('class', 'App')
    app.appendChild(new LandingPage())
    return app
  }
}

export default App
