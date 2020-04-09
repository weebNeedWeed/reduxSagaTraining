import axios from "axios";

class callApi {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }
  /*
   * Create and store a single entity's endpoint
   */
  createEntity(entity) {
    this.endpoints[entity.name] = this.createCRUDEndpoint(entity);
  }
  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }
  createCRUDEndpoint({ name }) {
    let endpoints = {};

    let url = `${this.url}/${name}`;

    endpoints.getDog = ({ query } = {}) => axios.get(url, { params: query });

    return endpoints;
  }
}

export default callApi;
