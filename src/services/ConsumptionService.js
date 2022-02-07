import http from "../api/units";

const getAll = () => {
  return http.get("/monthly_consumption");
};
const get = (id) => {
  return http.get(`/monthly_consumption/${id}`);
};
const create = (data) => {
  return http.post("/monthly_consumption", data);
};
const update = (id, data) => {
  return http.put(`/monthly_consumption/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/monthly_consumption/${id}`);
};
const ConsumptionService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default ConsumptionService;