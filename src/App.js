import './App.css';
import Person from './components/Person';


function App() {
  return (
    <div className="App">
      <Person 
      firstName={'Jane'}
      lastName={'Doe'}
      initialAge={45}
      hairColor={'Black'}
      />
      <Person 
      firstName={'John'}
      lastName={'Smith'}
      initialAge={88}
      hairColor={'Brown'}
      />

    </div>
  );
}

export default App;
