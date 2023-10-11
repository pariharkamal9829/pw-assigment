import Person from "./Person";
import Header from "./Header";
import List from "./Lsit";
import Button from "./Button";


function App() {
  return (
    <div>
      <Person name="John" age="30" />
      <Button text="Click me!" onClick={() => console.log("Button clicked")} />
      <Header title="Welcome to my website!" />
      <List items={['apple', 'banana', 'orange']} />
    
    </div>
  );
}

export default App;
