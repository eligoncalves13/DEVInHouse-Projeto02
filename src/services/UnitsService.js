import http from "../api/units";

const getAll = () => {
  return http.get("/consumer_unit");
};
const get = (id) => {
  return http.get(`/consumer_unit/${id}`);
};
const create = (data) => {
  return http.post("/consumer_unit", data);
};
const update = (id, data) => {
  return http.put(`/consumer_unit/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/consumer_unit/${id}`);
};
const UnitsService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default UnitsService;