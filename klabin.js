const express = require('express');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const adminBro = new AdminBro()
const buildAdminRouter = AdminBroExpress.buildRouter(adminBro)
const mongoose = require('mongoose');

const app = express();
const port = 3005;

const klabin = async () =>{
  await mongoose.connect('mongodb+srv://techandsol:techandsol@cluster0.x9bvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);

  app.use('/',(req, res) => {
    res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2578_RC02/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=klabin&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=klabin&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=klabin&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"klabin","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=klabin&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> ');
   });

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
}


module.exports = klabin;