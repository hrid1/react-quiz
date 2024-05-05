import Layout from "./components/Layout"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Quiz from "./components/pages/Quiz"
import Signup from "./components/pages/Signup"
import "./styles/App.css"



function App() {
  

  return (
    <Layout>
      {/* <Home></Home> */}
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
      <Quiz></Quiz>
    </Layout>
  )
}

export default App
