import './App.css';
import Basic from './basicComponent/basic'; // you must input the component you made

function App() {
  return (
    <div className="App">
      <h1>This is the app component</h1>
      <p>Inside of the app component, I will define one basic component</p>
      <Basic/> 
      {/* (This is a comment) The basic component is now used once.  */}
    </div>
  );
}

export default App;
