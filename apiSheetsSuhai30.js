import axios from "axios";

const apiSheetsSuhai30 = axios.create({
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     baseURL: "http://vps23593.publiccloud.com.br:3099/",
});

export default apiSheetsSuhai30;