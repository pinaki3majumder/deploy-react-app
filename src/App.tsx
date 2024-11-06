import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import List from './components/List/List';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/deploy-react-app" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
