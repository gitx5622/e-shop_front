
let API_ROUTE;

if (process.env.NODE_ENV === 'production') {
    API_ROUTE = 'https://admin.likee.co.ke'
<<<<<<< HEAD
}else {
=======
} else {
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
    API_ROUTE = 'http://127.0.0.1:9000';
}

export default API_ROUTE;
