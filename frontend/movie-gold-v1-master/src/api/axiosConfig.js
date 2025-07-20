
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080', // Make sure this is still correct
    headers: {
        "ngrok-skip-browser-warning": "true",
        "Content-Type": "application/json"
    }
});