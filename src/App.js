
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';



function App() {
  return (
    <div>
      <div className='relative'>
      <Header/>
      <div className='flex'>
      <Sidebar/>
      <Middle/>
      </div>
      </div>
     
    </div>
  );
}

export default App;
