import './App.css'
import { Routes, Route } from "react-router-dom";
import { LandinPage } from './views/landinPage';
import { HomePage } from './views/homePage';
import { DetailPage } from './views/detailPage';
import { CreatePage } from './views/createPage';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTemperaments } from './redux/actions';
import { DeleteDog } from './views/deleteDog';
import axios from 'axios';


// axios.defaults.baseURL = 'https://localhost:3001'
axios.defaults.baseURL = 'https://pi-dogs-gratis.up.railway.app'

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
        <Route path="/detail/:id" element={<DetailPage/>}> </Route>
        <Route path="/createDog" element={<CreatePage/>}> </Route>
        <Route path="/deletedog" element={<DeleteDog/>}> </Route>
      </Routes>
    </div>
  

  )
}

export default App
