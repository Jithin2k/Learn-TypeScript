
import "./App.css"
import Greet from "./Components/Greet"
import Status from "./Components/Status"

const App = () => {
  return (
    <div>
      <Greet name = "Jithin" num={11}/>
      <Status status="success"/>
    </div>
  )
}

export default App
