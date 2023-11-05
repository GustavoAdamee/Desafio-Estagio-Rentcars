import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddVehicle from './components/add-vehicle.component';
import Vehicle from './components/vehicle.component';
import VehicleList from './components/list-vehicle.component';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand navbar-black bg-black'>
          <a href='/' className='navbar-brand'>
            <h3 style={{color: 'yellow'}}>Rentcars API</h3>
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/"} className="nav-link">
                <a style={{color: 'white'}}>Vehicles</a>
              </Link>
            </li>
            <li>
              <Link to={"/add"} className="nav-link">
              <a style={{color: 'white'}}>Add new vehicle</a>
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<VehicleList/>}/>
            <Route path='/vehicles' element={<VehicleList/>}/>
            <Route path='/add' element={<AddVehicle/>}/>
            <Route path='/vehicles/:id' element={<Vehicle/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;