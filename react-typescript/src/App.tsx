import "./App.css";
import Button from "./Components/Button";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Oscar from "./Components/Oscar";
import Status from "./Components/Status";

const App = () => {
  return (
    <div>
      <Greet name="Jithin" num={11} />
      <Status status="success" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Mohanlal</Heading>
      </Oscar>
      <Greet name="Viswas" num={89} isLoggedIn={true} />
      <Button
        handleClick={(event,id) => {
          console.log("clicked",event,id);
        }}
      />
      <Input value="" handleChange={(event)=>console.log(event)
      }/>
    </div>
  );
};

export default App;
