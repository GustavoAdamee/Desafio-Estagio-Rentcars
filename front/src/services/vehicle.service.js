import http from "../http-common";

class VehicleDataService {
    getAll() {
        return http.get("/vehicles");
    }

    get(id) {
        return http.get(`/vehicles/${id}`);
    }

    create(data) {
        return http.post("/vehicles", data);
    }

    update(id, data) {
        return http.put(`/vehicles/${id}`, data);
    }

    delete(id) {
        return http.delete(`/vehicles/${id}`);
    }
}

export default new VehicleDataService();