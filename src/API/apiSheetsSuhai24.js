import axios from "axios";

const apiSheetsSuhai24 = axios.create({
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     baseURL: "http://vps23593.publiccloud.com.br:3092/",
});

export default apiSheetsSuhai24;