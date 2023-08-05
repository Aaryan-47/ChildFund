import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/signup";

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/main" element={<Main/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/"element={<Login/>}/>

     </Routes>
   </BrowserRouter>
  );
}

export default App;
