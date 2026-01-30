import Home from "./pages/Home";
import SignUp from "./pages/signup";

function App() {
  <>
  <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<SignUp />}/>
    
  </Routes>
  </>
  return <Home />;
}

export default App;
