import "./App.css";
import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import AllStarships from "./pages/AllStarships/AllStarships"


function App() {
  return (
    <>
     <NavBar />
    <AllStarships />
    {/* <Routes>
      <Route path='/starship' element={<StarshipDetails />} />
    </Routes> */}
   
    </>
  )
}

export default App;