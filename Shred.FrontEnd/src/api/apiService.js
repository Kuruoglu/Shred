import axios from 'axios';
import {baseUrl} from "./baseUsl";

function getAuthHeader() {
    return {Authorization: 'Bearer ' + localStorage.getItem('token')};
};

export const loginApi = (data) => axios.post(baseUrl + '/login', {headers: getAuthHeader()});