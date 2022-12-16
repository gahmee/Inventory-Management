import { Routes, Route } from 'react-router-dom'

//pages & components

import Home from './pages/Home'
import Receive from './pages/Receive'
import Edit from './pages/Edit'
import Add from './pages/Add'
import NewCount from './pages/NewCount'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="receive" element={<Receive />} />
          <Route path="edit" element={<Edit />} />
          <Route path="add" element={<Add />} />
          <Route path="new-count" element={<NewCount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
