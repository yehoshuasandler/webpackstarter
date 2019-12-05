import App from './App'
import './index.css'

const index = () => {
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(new App())
  return body
}

index()
