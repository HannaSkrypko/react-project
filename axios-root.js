import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://internal-shop-bbf4a.firebaseio.com/'
});

export default instance;