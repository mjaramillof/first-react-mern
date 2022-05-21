import './App.css';
import PersonCard2 from './components/PersonCard2';

//Another way to define de function using arrow notation

const App = () => {
  return(
    <div className='App'>
      <PersonCard2 firstName = {'John'} lastName = {'Doe'} age = {30} hairColor = {'Brown'} addaAge/>
      <PersonCard2 firstName = {'Amadeus'} lastName = {'Mozart'} age = {80} hairColor = {'Grey'} addAge/>
      <PersonCard2 firstName = {'Millard'} lastName = {'Fillmore'} age = {50} hairColor = {'Brown'} addaAge/>
      <PersonCard2 firstName = {'Maria'} lastName = {'Doe'} age = {62} hairColor = {'Brown'} addaAge/>
    </div>
  );
}
export default App;