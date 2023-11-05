import React, { Component } from "react"
import VehicleDataService from "../services/vehicle.service"
import { Link } from "react-router-dom"

export default class ListVehicle extends Component {
    constructor(props) {
        super(props)

        this.onChangeID = this.onChangeID.bind(this)
        this.retrieveVehicles = this.retrieveVehicles.bind(this)
        this.refreshList = this.refreshList.bind(this)
        this.setActiveVehicle = this.setActiveVehicle.bind(this)

        this.state = {
            vehicles: [],
            currentVehicle: null,
            currentIndex: -1,
            searchID: ""
        }
    }

    componentDidMount() {
        this.retrieveVehicles()
    }

    onChangeID(e) {
        const searchTitle = e.target.value

        this.setState({
            searchID: searchTitle
        })
    }

    retrieveVehicles() {
        VehicleDataService.getAll()
            .then(response => {
                this.setState({
                    vehicles: response.data
                })
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    refreshList() {
        this.retrieveVehicles()
        this.setState({
            currentVehicle: null,
            currentIndex: -1
        })
    }

    setActiveVehicle(vehicle, index) {
        this.setState({
            currentVehicle: vehicle,
            currentIndex: index
        })
    }

    render() {
        const { vehicles, currentVehicle, currentIndex } = this.state

        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Vehicles</h4>
                    <ul className="list-group">
                        {vehicles && vehicles.map((vehicle, index) => (
                            <li
                                className={
                                    "list-group-item" 
                                    + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveVehicle(vehicle, index)}
                                key={index}
                            >
                                {vehicle.id}
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentVehicle ? (
                        <div>
                            <h4>Vehicle</h4>
                            <div>
                                <label>
                                    <strong>ID:</strong>
                                </label>{" "}
                                {currentVehicle.id}
                            </div>
                            <div>
                                <label>
                                    <strong>locadora:</strong>
                                </label>{" "}
                                {currentVehicle.locadora}
                            </div>
                            <div>
                                <label>
                                    <strong>modelo:</strong>
                                </label>{" "}
                                {currentVehicle.modelo}
                            </div>
                            <div>
                                <label>
                                    <strong>marca:</strong>
                                </label>{" "}
                                {currentVehicle.marca}
                            </div>
                            <div>
                                <label>
                                    <strong>ano:</strong>
                                </label>{" "}
                                {currentVehicle.ano}
                            </div>
                            <div>
                                <label>
                                    <strong>motor:</strong>
                                </label>{" "}
                                {currentVehicle.motor}
                            </div>
                            <div>
                                <label>
                                    <strong>portas:</strong>
                                </label>{" "}
                                {currentVehicle.portas}
                            </div>
                            <div>
                                <label>
                                    <strong>cambio:</strong>
                                </label>{" "}
                                {currentVehicle.cambio}
                            </div>
                            <div>
                                <label>
                                    <strong>ar_condicionado:</strong>
                                </label>{" "}
                                {currentVehicle.ar_condicionado ? "Sim" : "Não"}
                            </div>
                            <Link
                                to={"/vehicles/" + currentVehicle.id}
                                className="btn btn-primary"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Vehicle...</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}