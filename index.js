const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req, res) => {
    res.send('<iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiODYyMWU0YTYtYjM5NC00ZjM0LWE4MWUtODZkMzFiMDQ4Zjg5IiwidCI6Ijg3ZTcxOWVhLTg0MGUtNDFiMy05Y2NkLTM5MDg2YzllY2NiNiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>');
});

app.listen(PORT, HOST);