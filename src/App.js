import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import SharedLayout from './components/SharedLayout/Sharedlayout';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
<Route path='/' element={<SharedLayout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
