const express = require('express');
const { default: AdminBro } = require('admin-bro');
const options = require('./src/admin.options');
const buildAdminRouter = require('./src/admin.router');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

const telha = async () =>{
  await mongoose.connect('mongodb+srv://techandsol:techandsol@cluster0.x9bvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);

  app.use('/',(req, res) => {
    res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2578_RC02/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"telha norte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telha%20norte&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"telha norte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telha%20norte&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"telha norte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telha6%20norte&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"telha norte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telha%20bank&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> ');
   });

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
}


module.exports = telha;