import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName={"Doe"} 
      name={"Jane"}
      age={45}
      hairColor={"Black"}
      />
      <PersonCard 
      lastName={"Smith"} 
      name={"John"}
      age={88}
      hairColor={"Brown"}
      />
    </div>
    
  );
}

export default App;
