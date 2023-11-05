import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";

export default class AddVehicle extends Component {
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
        this.saveVehicle = this.saveVehicle.bind(this);
        this.newVehicle = this.newVehicle.bind(this);

        this.state = {
            id: null,
            locadora: "",
            modelo: "",
            marca: "",
            ano: "0000",
            motor: "",
            portas: "0",
            cambio: "",
            ar_condicionado: false,

            submitted: false
        }
    }

    onChangeLocadora(e) {
        this.setState({
            locadora: e.target.value
        })
    }

    onChangeModelo(e) {
        this.setState({
            modelo: e.target.value
        })
    }

    onChangeMarca(e) {
        this.setState({
            marca: e.target.value
        })  
    }

    onChangeAno(e) {
        this.setState({
            ano: e.target.value
        })
    }

    onChangeMotor(e) {
        this.setState({
            motor: e.target.value
        })
    }

    onChangePortas(e) {
        this.setState({
            portas: e.target.value
        })  
    }

    onChangeCambio(e) {
        this.setState({
            cambio: e.target.value
        })
    }

    onChangeArCondicionado(e) {
        this.setState({
            ar_condicionado: e.target.checked
        })
    }

    saveVehicle() {

        console.log("saveVehicle")

        var data = {
            locadora: this.state.locadora,
            modelo: this.state.modelo,
            marca: this.state.marca,
            ano: this.state.ano,
            motor: this.state.motor,
            portas: this.state.portas,
            cambio: this.state.cambio,
            ar_condicionado: this.state.ar_condicionado
        }

        VehicleDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    locadora: response.data.locadora,
                    modelo: response.data.modelo,
                    marca: response.data.marca,
                    ano: response.data.ano,
                    motor: response.data.motor,
                    portas: response.data.portas,
                    cambio: response.data.cambio,
                    ar_condicionado: response.data.ar_condicionado,

                    submitted: true
                })
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    newVehicle() {
        this.setState({
            id: null,
            locadora: "",
            modelo: "",
            marca: "",
            ano: "0000",
            motor: "",
            portas: "0",
            cambio: "",
            ar_condicionado: false,

            submitted: false
        })
    }

    render () {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Vehicle submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newVehicle}>
                            add another vehicle
                        </button>
                    </div>
                ): (
                    <div>
                        <div className="form-group">
                            <label htmlFor="locadora">Locadora</label>
                            <input
                                type="text"
                                className="form-control"
                                id="locadora"
                                required
                                value={this.state.locadora}
                                onChange={this.onChangeLocadora}
                                name="locadora"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="modelo">Modelo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="modelo"
                                required
                                value={this.state.modelo}
                                onChange={this.onChangeModelo}
                                name="modelo"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="marca">Marca</label>
                            <input
                                type="text"
                                className="form-control"
                                id="marca"
                                required
                                value={this.state.marca}
                                onChange={this.onChangeMarca}
                                name="marca"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ano">Ano</label>
                            <input
                                type="number"
                                className="form-control"
                                id="ano"
                                required
                                value={this.state.ano}
                                onChange={this.onChangeAno}
                                name="ano"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="motor">Motor</label>
                            <input
                                type="text"
                                className="form-control"
                                id="motor"
                                required
                                value={this.state.motor}
                                onChange={this.onChangeMotor}
                                name="motor"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="portas">Portas</label>
                            <input
                                type="number"
                                className="form-control"
                                id="portas"
                                required
                                value={this.state.portas}
                                onChange={this.onChangePortas}
                                name="portas"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cambio">Cambio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cambio"
                                required
                                value={this.state.cambio}
                                onChange={this.onChangeCambio}
                                name="cambio"
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="checkbox" 
                                class="form-check-input" 
                                id="ar_condicionado"
                                checked={this.state.ar_condicionado}
                                onChange={this.onChangeArCondicionado}
                                name="ar_condicionado"
                            />
                            <label class="form-check-label" for="ar_condicionado">Ar Condicionado</label>
                        </div>
                        <br></br>
                        <br></br>
                        <button onClick={this.saveVehicle} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        )
    }
}