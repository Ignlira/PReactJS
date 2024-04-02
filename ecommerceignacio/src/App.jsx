import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
return (
  <>
<BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/home" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
</BrowserRouter>
</> 
  );
}

export default App
