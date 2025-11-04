import "./App.css";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Status from "./Components/Status";

const App = () => {
  return (
    <div>
      <Greet name="Jithin" num={11}  />
      <Status status="success" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Mohanlal</Heading>
      </Oscar>
      <Greet name="Viswas" num={89} isLoggedIn={true}/>
    </div>
  );
};

export default App;
