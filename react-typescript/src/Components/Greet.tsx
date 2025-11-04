type GreetProps = {
    name : string,
    num : number,
    isLoggedIn? : boolean
}

const Greet = ({name,num,isLoggedIn} : GreetProps) => {
  return (
    <div>
      {
        isLoggedIn ?  <h1>Hello,Welcome {name}!You have {num} messages.</h1> : <h2>Welcome All</h2>
      }
     
    </div>
  )
}

export default Greet
