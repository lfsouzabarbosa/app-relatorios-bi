import axios from "axios";

const gdisplay = axios.create({
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     baseURL: "http://localhost:3093/",
});

export default gdisplay;