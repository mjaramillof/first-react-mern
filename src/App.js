import './App.css';
import PersonCard from './components/PersonCard';
import PersonCard2 from './components/PersonCard2';

function App(){
  return (
    <div className="App">
      <PersonCard2 firstName = {'John'} lastName = {'Doe'} age = {30} hairColor = {'Brown'} addaAge/>
      <PersonCard2 firstName = {'Amadeus'} lastName = {'Mozart'} age = {80} hairColor = {'Grey'} addAge/>
    </div>
  ); 
}
export default App;

//Another way to define de function using arrow notation

/* const App = () => {
  return(
    <div className='App'>
      <PersonCard firstName = {'John'} lastName = {'Doe'} age = {30} hairColor = {'Brown'}/>
      <PersonCard2 firstName = {'Amadeus'} lastName = {'Mozart'} age = {230} hairColor = {'Grey'}/>
    </div>
  );
}
export default App;
 */