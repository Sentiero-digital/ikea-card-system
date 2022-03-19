import {IkeaGrid} from "./components";
import './global.scss'

function App() {

  return (
      <div className="App">
        <div className="container">
          <h1>Ikea card system with dots</h1>
          <p>Prototype made by <a href="https://www.sentiero.digital/" target={'_blank'}>Sentiero.digital</a>, check the
            code on <a href="https://github.com/Sentiero-digital/ikea-card-system"
            target="_blank" rel="noreferrer">Github</a></p>
          <p><small>
            This project is a <abbr title="Proof of concept">PoC</abbr>, and may need improvements for production enviroment.
          </small></p>
          <hr/>
          <IkeaGrid/>
        </div>
      </div>
  )
}

export default App
