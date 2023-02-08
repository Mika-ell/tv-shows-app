import { getByDisplayValue } from '@testing-library/react';
import './App.css';
import showsData from  './shows-data'



function Show(props) {
return (
  <div className='Show'>
    <img className='Show-image' src= {props.showObject.image.medium} />
    <h2>{props.showObject.name}</h2>
  </div>
)
}

function App() {
  return (
    <div className="App">
      <h1>The Best TV Shows App by me</h1>
      {showsData.map( item => <Show showObject={item}/> )}
    </div>
  );
}

export default App;

