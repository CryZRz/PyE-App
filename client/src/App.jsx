import {BrowserRouter, Routes ,Route} from "react-router-dom"

import './App.css'

import { DatesNotGroupedSM } from './pages/DatesNotGroupedSM'
import { DatesGroupedSM } from './pages/DatesGroupedSM'
import { DatesNotGroupedMoF } from './pages/DatesNotGroupedMoF'
import { DatesGroupedMoF } from './pages/DatesGroupedMoF'
import { Curtosis } from './pages/Curtosis'
import { TableFrequency } from './pages/TableFrequency'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="Main-App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home/>
          }>
          </Route>
          <Route path='/table-frequency' 
            element={<TableFrequency/>}
          />
          <Route path='/second-moment-dates-not-grouped' 
            element={<DatesNotGroupedSM/>}
          />
          <Route 
            path='/second-moment-dates-grouped'
            element={<DatesGroupedSM/>}
          >
          </Route>
          <Route 
            path='/measures-of-dispersion-dates-not-grouped'
            element={<DatesNotGroupedMoF/>}
          >
          </Route>
          <Route 
            path='/measures-of-dispersion-dates-grouped'
            element={<DatesGroupedMoF/>}
          >
          </Route>
          <Route 
            path='/curtosis'
            element={<Curtosis/>}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
