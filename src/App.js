import { getByDisplayValue } from '@testing-library/react';
import './App.css';
import showsData from  './shows-data'
import ShowList from './components/ShowList';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <h1>The Best TV Shows App by me</h1>
      <ShowList shows={showsData} />
    
    </div>
  );
}

export default App;

