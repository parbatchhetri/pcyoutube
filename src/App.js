
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
function App() {
  return (
    <div className='' >
      <Header/>
      <div className='flex'>
      <Sidebar/>
      <Middle/>
      </div>
    </div>
  );
}

export default App;
