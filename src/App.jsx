import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import "./styles/App.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
     <Layout>
     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/quiz' element={<Quiz/>}/>
        <Route exact path='/result' element={<Result/>}/>
      </Routes>
     </Layout>
    </BrowserRouter>
  );
}

export default App;
