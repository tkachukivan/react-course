import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-12f74.firebaseio.com/'
});

export default instance;