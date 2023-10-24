import './App.css'
import { Routes, Route } from "react-router-dom";
import { LandinPage } from './views/landinPage';
import { HomePage } from './views/homePage';
import { DetailPage } from './views/detailPage';
import { CreatePage } from './views/createPage';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTemperaments } from './redux/actions';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTemperaments());
  },[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandinPage/>}> </Route>
        <Route path="/home" element={<HomePage/>}> </Route>
        <Route path="/detail" element={<DetailPage/>}> </Route>
        <Route path="/createActivity" element={<CreatePage/>}> </Route>
      </Routes>
    </div>
  

  )
}

export default App
