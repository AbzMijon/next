import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://nest-backend-room-app.onrender.com',
});

export default instance;