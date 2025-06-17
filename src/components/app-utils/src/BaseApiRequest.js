export class BaseApiRequest {

  constructor() {}

  async get(path, params = {}) {
    return new Promise(async (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const pathParams = params == {} ? '' : await this.buildParams(params);
      xhr.open("GET", `${path}${pathParams}`);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.send();
      xhr.responseType = "json";
      xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          const data = xhr.response;
          resolve(data);
        } else {
          reject(`Error: ${xhr.status}`);
        }
      };
    });
  }

  async buildParams(params) {
    let data = '';
    Object.keys(params).forEach((key , i) => {
      if (i > 0) { data = data + '&'; }
      data = data + key + '=' + params[key];
    });
    return '?' + data;
  }
}