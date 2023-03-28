 
import './App.css';
import Activity from './components/Activity/Activity';
import Breaktime from './components/Breaktime/Breaktime';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      <Activity></Activity>
      <Breaktime></Breaktime>
      </div>
     
    </div>
  );
}

export default App;
