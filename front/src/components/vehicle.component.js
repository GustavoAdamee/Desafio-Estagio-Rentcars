import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";
import { withRouter } from "../common/with-router";

class Vehicle extends Component {
    constructor(props) {
        super(props)

        this.onChangeLocadora = this.onChangeLocadora.bind(this);
        this.onChangeModelo = this.onChangeModelo.bind(this);
        this.onChangeMarca = this.onChangeMarca.bind(this);
        this.onChangeAno = this.onChangeAno.bind(this);
        this.onChangeMotor = this.onChangeMotor.bind(this);
        this.onChangePortas = this.onChangePortas.bind(this);
        this.onChangeCambio = this.onChangeCambio.bind(this);
        this.onChangeArCondicionado = this.onChangeArCondicionado.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);

        this.state = {
            currentVehicle: {
                id: null,
                locadora: "",
                modelo: "",
                marca: "",
                ano: "",
                motor: "",
                portas: "",
                cambio: "",
                ar_condicionado: ""
            },
            message: ""
        }
    }

    componentDidMount() {
        this.getVehicle(this.props.router.params.id);
    }

    getVehicle(id) {
                VehicleDataService.get(id)
            .then(response => {
                this.setState({
                    currentVehicle: response.data
                })
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    onChangeLocadora(e) {
        const locadora = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    locadora: locadora
                }
            }
        })
    }

    onChangeModelo(e) {
        const modelo = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    modelo: modelo
                }
            }
        })
    }

    onChangeMarca(e) {
        const marca = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    marca: marca
                }
            }
        })
    }

    onChangeAno(e) {
        const ano = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    ano: ano
                }
            }
        })
    }

    onChangeMotor(e) {
        const motor = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    motor: motor
                }
            }
        })
    }

    onChangePortas(e) {
        const portas = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    portas: portas
                }
            }
        })
    }

    onChangeCambio(e) {
        const cambio = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    cambio: cambio
                }
            }
        })
    }

    onChangeArCondicionado(e) {
        const ar_condicionado = e.target.value

        this.setState(function(prevState){
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    ar_condicionado: ar_condicionado
                }
            }
        }) 
    }

    updateVehicle() {
        VehicleDataService.update(
            this.state.currentVehicle.id,
            this.state.currentVehicle
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The vehicle was updated successfully!"
                })
            })
            .catch(e => {
                console.log(e);
            })
    }

    deleteVehicle() {
        VehicleDataService.delete(this.state.currentVehicle.id)
            .then(response => {
                console.log(response.data);
                this.props.router.navigate('/')
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { currentVehicle } = this.state
        return (
            <div>
                {currentVehicle ? (
                    <div className="edit-form">
                        <h4>Vehicle</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="locadora">Locadora</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="locadora"
                                    value={currentVehicle.locadora}
                                    onChange={this.onChangeLocadora}
                                />
                            </div>
                            <div>
                                <label htmlFor="modelo">Modelo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="modelo"
                                    value={currentVehicle.modelo}
                                    onChange={this.onChangeModelo}
                                />
                            </div>
                            <div>
                                <label htmlFor="marca">Marca</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="marca"
                                    value={currentVehicle.marca}
                                    onChange={this.onChangeMarca}
                                />
                            </div>
                            <div>
                                <label htmlFor="ano">Ano</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ano"
                                    value={currentVehicle.ano}
                                    onChange={this.onChangeAno}
                                />
                            </div>
                            <div>
                                <label htmlFor="motor">Motor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="motor"
                                    value={currentVehicle.motor}
                                    onChange={this.onChangeMotor}
                                />
                            </div>
                            <div>
                                <label htmlFor="portas">Portas</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="portas"
                                    value={currentVehicle.portas}
                                    onChange={this.onChangePortas}
                                />
                            </div>
                            <div>
                                <label htmlFor="cambio">Cambio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cambio"
                                    value={currentVehicle.cambio}
                                    onChange={this.onChangeCambio}
                                />
                            </div>
                            <div>
                                <label htmlFor="ar_condicionado">Ar Condicionado</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ar_condicionado"
                                    value={currentVehicle.ar_condicionado}
                                    onChange={this.onChangeArCondicionado}
                                />
                            </div>
                        </form>
                        <button
                            className="btn btn-danger"
                            onClick={this.deleteVehicle}
                        >
                            Delete
                        </button>
                        <br></br>
                        <button
                            type="submit"
                            className="btn btn-info"
                            style={{ color: "black", background: "blue" }}
                            onClick={this.updateVehicle}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Vehicle...</p>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(Vehicle);