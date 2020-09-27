import axios from 'axios'

const ROOT_URL = 'https://frebi.willandskill.eu/'
const API_URL = `${ROOT_URL}api/v1/`
const DELETE_CUSTOMER = `${API_URL}customers/`;
const UPDATE_CUSTOMER = `${ROOT_URL}api/v1/customers/`;
const USER_INFO_URL = `${ROOT_URL}api/v1/me`
const AUTH_URL = `${ROOT_URL}auth/`
const LOGIN_URL = `${ROOT_URL}api-token-auth/`


export default class{


   async register(userInfo) {
    const url = `${AUTH_URL}users/`
    return axios({
      method: "post",
      url,
      data: userInfo,
      headers: this.getPublicHeaders(),
    });
  }

   async deleteCustomer(id) {
    const url = `${DELETE_CUSTOMER}${id}/`;
    return axios({
      method: "delete",
      url,
      data:id,
      headers: this.getPrivateHeaders(),
    });
  }
   async updateCustomer(id,payload) {
    const url = `${UPDATE_CUSTOMER}${id}/`;
    return axios({
      method: 'put',
      url,
      data:{...payload},
      headers: this.getPrivateHeaders(),
    });

  }

 

   async activateUser(uid, token) {
    const url = `${AUTH_URL}users/activate/`
    const payload = {
      uid, token
    }
    return axios({
      method: "POST",
      url, 
      data: JSON.stringify(payload),
      headers: this.getPublicHeaders(),
    })
  }
    
  async getCustomerList() {
    const url = `${API_URL}customers`;
    return axios({
      method: "GET",
      url, 
      headers: this.getPrivateHeaders(),

    })
  }
  async getUserInfo() {
    const url = `${USER_INFO_URL}`;
    return axios({
      method: "GET",
      url, 
      headers: this.getPrivateHeaders(),

    })
  }
  async createCustomer(payload) {
    const url = `${API_URL}customers`
    return axios({
      method: "post",
      url,
      data: payload,
      headers: this.getPrivateHeaders()
    })
  }

    async login(payload) {
    const url = `${LOGIN_URL}`
    return axios({
      method: "post",
      url,
      data: payload,
      headers: this.getPublicHeaders(),
    });
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token)
  }
 
  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN")
  }

   getPublicHeaders() {
      return {
    "Content-Type": "application/json"
     }
   }
   

   getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.getToken()}`
    }
  }

}


