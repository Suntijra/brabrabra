const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/api/test', (req, resp) => {
    let data = {}
    try {
        return resp.status(200).json(
            {
                status: "ok",
                data: "test"
            }
        )
    }catch (error) {
        return resp.status(500).json(
            {
                status: "fail",
                data: "test"
            }
        )
    }

})
