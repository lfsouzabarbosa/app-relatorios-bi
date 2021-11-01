let googleNewsAPI = require("google-news-json");
let news = await googleNewsAPI.getNews(googleNewsAPI.TOP_NEWS, null, "en-GB");

googleNewsAPI.getNews(googleNewsAPI.SEACRH, "c6 bank", "en-GB", (err, response) => {
    console.log(response);
});