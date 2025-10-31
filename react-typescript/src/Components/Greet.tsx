type GreetProps = {
    name : string,
    num : number
}

const Greet = ({name,num} : GreetProps) => {
  return (
    <div>
      <h1>Hello,Welcome {name}!You have {num} messages</h1>
    </div>
  )
}

export default Greet
