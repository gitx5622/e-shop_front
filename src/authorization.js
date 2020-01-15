import axios from 'axios';

<<<<<<< HEAD
export default function  setAuthorizationToken(token){
    if (token) {
        axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
=======
export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
