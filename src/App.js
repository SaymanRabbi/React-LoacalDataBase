import './App.css';
import Data from './Componenets/Data/Data';
import { Itstesting } from './Componenets/export';

function App() {
  Itstesting()
  return (
    <div className="App">
      <h2>Welcome To FakeMeal DB</h2>
      <Data></Data>
    </div>
  );
}

export default App;
