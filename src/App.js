import './App.css';
import ParticlesComponent from './components/particles';
import Pictures from './components/imageLib';
import Logos from './components/logo';
import ChangingList from './components/changingtext';
import EndPage from './components/endpage';



function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <h1>Rami's Room</h1>
      <div className='flex-container'>
        <Logos />
        <ChangingList/>
      </div>
      <Pictures />
      <EndPage />
    </div>
  );
}

export default App;