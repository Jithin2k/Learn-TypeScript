
import "./App.css"
import Greet from "./Components/Greet"
import Heading from "./Components/Heading"
import Status from "./Components/Status"

const App = () => {
  return (
    <div>
      <Greet name = "Jithin" num={11}/>
      <Status status="success"/>
      <Heading>PlaceHolder Text</Heading>
    </div>
  )
}

export default App
