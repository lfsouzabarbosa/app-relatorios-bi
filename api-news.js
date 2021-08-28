let googleNewsAPI = require("google-news-json");
// let news = await googleNewsAPI.getNews(googleNewsAPI.TOP_NEWS, null, "en-GB");

let chamada = googleNewsAPI.getNews(googleNewsAPI.SEACRH, "apple", "en-GB", (err, response) => {
    console.log(response);
});