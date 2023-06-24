import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./Page/Main.jsx";
import SubPage from "./Page/SubPage.jsx";

function App() {

  return (
    <>
      <div>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/sub" element={<SubPage/>} />
          </Routes>
      </div>
    </>
  )
}
export default App
