
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from "./components/Notfound/Notfound"
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path="/" element={ <Home></Home> } ></Route>
       <Route path="/service" element={<Services></Services>} ></Route>
    
       <Route path="*" element={ <Notfound></Notfound>} ></Route>
     </Routes>
     
    </div>
  );
}

export default App;
