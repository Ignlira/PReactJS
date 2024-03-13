import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/navBar';


function App() {
return (
<>
<NavBar/>
<ItemListContainer greeting= "En Construcción"/>
</> 
  );
}

export default App
