import './App.css';
import LightApp from './light-app';
function App() {
  return (
    <>
    <div className="App">
    <header className="App-heading">
        <h1>light app</h1>
        </header>
        <div className="samerow">
        <LightApp Name="first" />
        <LightApp Name="second" />
        
        </div>
    
    
    </div>
    </>
    

  );
 
};

export default App;
