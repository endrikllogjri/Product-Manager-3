import './App.css';
import Main from './component/Main';
import Detail from './component/Detail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<Detail/>} path="/objects/:id" /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
