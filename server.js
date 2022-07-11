const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/api/Shopsakainfo', (req, resp) => {
    try {
        return resp.status(200).json(
            {
                status: "ok",
                data: data
            }
        )
    } catch (error) {
        return resp.status(500).json(
            {
                status: "fail",
            }
        )
    }

})





var data = [[{
    "customerID": "00388",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 1",
    "username": "admin123",
    "status": "open",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "08x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
},
{
    "customerID": "00388",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 2",
    "username": "admin23",
    "status": "open",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "06x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
},
{
    "customerID": "00388",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 3",
    "username": "admin3",
    "status": "open",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "09x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
}
]]
