const express = require('express');
const { default: AdminBro } = require('admin-bro');

const app = express();

/** @type {AdminBro.ResourceOptions} */
app.use('/',(req, res) => {
        res.send('<Box variant="grey"> <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2578_RC02/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_TOPICS", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> <script type="text/javascript"> trends.embed.renderExploreWidget("RELATED_QUERIES", {"comparisonItem":[{"keyword":"c6 bank","geo":"BR","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=c6%20bank&geo=BR&date=today 12-m","guestPath":"https://trends.google.com.br:443/trends/embed/"}); </script> </Box>');
});

module.exports = {
     options,
    resource: Trends,
};