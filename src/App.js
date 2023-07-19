
import './App.css';
// import 'sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';


function App() {
 

  return (
   <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home/>}>
          <Route index element='' />
          <Route path="" element='' />
          <Route path="" element='' />
          <Route path="" element='' />
        </Route>
      </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
