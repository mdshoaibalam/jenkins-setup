import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick=()=>{
    window.alert("clicked");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello jenkins pipeline
        </p>
        <button onClick={handleClick}>Click me </button>
      </header>
    </div>
  );
}

export default App;
