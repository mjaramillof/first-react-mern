import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1><span><PersonCard lastName = {"Doe"}/>, <PersonCard firstName = {"Jane"}/></span> </h1>
      <span>Age: <PersonCard age={45}/></span>
      <span>Hair Color: <PersonCard hairColor = {"Black"}/></span>
      <h1><span><PersonCard lastName = {"Smith"}/>, <PersonCard firstName = {"John"}/></span> </h1>
      <span>Age: <PersonCard age={88}/></span>
      <span>Hair Color: <PersonCard hairColor = {"Brown"}/></span>
      <h1><span><PersonCard lastName = {"Fillmore"}/>, <PersonCard firstName = {"Millard"}/></span> </h1>
      <span>Age: <PersonCard age={50}/></span>
      <span>Hair Color: <PersonCard hairColor = {"Brown"}/></span>
      <h1><span><PersonCard lastName = {"Smith"}/>, <PersonCard firstName = {"Maria"}/></span> </h1>
      <span>Age: <PersonCard age={45}/></span>
      <span>Hair Color: <PersonCard hairColor = {"Brown"}/></span>
    </div>
  ); 
}

export default App;
