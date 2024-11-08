import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import List from './components/List/List';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
