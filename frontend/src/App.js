import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import { ToastStatus } from './components/ToastStatus';
import HomePage from './pages/HomePage';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App">
       <Allroutes />
    </div>
  );
}

export default App;
