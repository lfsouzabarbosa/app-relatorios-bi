const express = require('express');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const adminBro = new AdminBro()
const buildAdminRouter = AdminBroExpress.buildRouter(adminBro)

const app = express();
const port = 3001;

const telha = async () =>{
  const admin = new AdminBro();
  const router = buildAdminRouter(admin);

  app.use(admin.rootPath, router);

  app.use('/',(req, res) => {
    res.send('<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2578_RC02/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telhanorte&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telhanorte&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telha6%20norte&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"telhanorte","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=telha%20bank&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> ');
   });

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
}

module.exports = telha;