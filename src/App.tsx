import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MyList from './components/List/List';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<MyList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
