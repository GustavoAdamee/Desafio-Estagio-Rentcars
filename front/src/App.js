import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddVehicle from './components/add-vehicle.component';
// import Vehicle from './components/vehicle.component';
// import VehicleList from './components/vehicle-list.component';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href='/vehicles' className='navbar-brand'>
            
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/vehicles"} className="nav-link">
                Vehicles
              </Link>
            </li>
            <li>
              <Link to={"/add"} className="nav-link">
                add
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            {/* <Route path='/' element={<VehicleList/>}/> */}
            {/* <Route path='/vehicles' element={<VehicleList/>}/> */}
            <Route path='/add' element={<AddVehicle/>}/>
            {/* <Route path='/vehicles/:id' element={<Vehicle/>}/> */}
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;