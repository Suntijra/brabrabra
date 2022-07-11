const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { add } = require('nodemon/lib/rules');

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

var adddata = []
app.post('/api/addsaka', (req, resp) => {
    let user = req.body.user
    let pwd = req.body.password
    let bnname = req.body.bnname
    let detail = req.body.detail
    let tel = req.body.tel
    let bndetail = req.body.bndetail
    let contact = req.body.contact
    let location = req.body.location
    let shopid = req.body.shopid
    let province = req.body.province
    let district = req.body.district
    let tumbon = req.body.tumbon
    let zipcode = req.body.zipcode
    try {
        adddata.push({
            'ชื่อผู้ใช้งาน': user,
            'รหัสผ่าน': pwd,
            'ชื่อสาขา': bnname,
            'รายละเอียด': detail,
            'เบอร์โทรร้านค้า': tel,
            'รายละเอียดของสาขา': bndetail,
            'ผู้ที่สามารถติดต่อได้': contact,
            'ที่ตั้งร้านค้า': location,
            'เลขที่ร้านค้า': shopid,
            'จังหวัด': province,
            'อำเภอ': district,
            'ตำบล': tumbon,
            'รหัสไปรษณีย์': zipcode,
        })
        console.log('-------------add OK---------------')
        console.log(user)
        return resp.status(200).json(
            {
                status: "ok"
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
app.post('/api/updatainfo', (req, resp) => {
    try {
        let obj = req.body.obj
        console.log(obj)
        return resp.status(200).json({
            status: "ok",
        })
    } catch (error) {
        console(error)
        return resp.status(500).json({
            status: "fail",
        })
    }

})

var data = [[{
    "customerID": "1111",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 1",
    "username": "admin123",
    "status": "open",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "08x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
},
{
    "customerID": "2222",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 20",
    "username": "admin23",
    "status": "close",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "06x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
},
{
    "customerID": "3333",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 112",
    "username": "admin31111",
    "status": "open",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "09x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
},
{
    "customerID": "4444",
    "shopName": "เลิฟมีเทนเดอร์",
    "branch": "สำนักงานใหญ่ 112",
    "username": "admin3",
    "status": "close",
    "branch_detail": "การทำน้อยกว่าที่ทำย้อมดีกว่าไม่ทำอะไรเลย",
    "tel": "09x-xxxx-xxx",
    "typeShope": "{\"storeFront\":\"yes\",\"typeShope\":\"ร้านขายเครื่องสำอาง\"}"
}
]]

// -------------------------------Team Teelek-------------------------------

app.post('/api/merchant/report/withdraw', (req, res) => {
    var token1 = req.body.token
    let data = [{
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }, {
        Respmessage: 'Success',
        maxcardno: 'WithDraw',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }]
    try {
        if (token1 == '1234') {
            return res.status(200).json(data)
        }
    } catch (er) {
        console.log("error ===>", er)
        return res.status(500).json({
            error: err.message
        })
    }
})
app.post('/api/merchant/report/income', (req, res) => {
    var token = req.body.token
    let data = [{
        Respmessage: 'Success',
        maxcardno: '162729252926',
        tel: '0987654321',
        date: '2022-07-01 00:00:00',
        status: 'สำเร็จ',
        price: 50.00
    }, {
        Respmessage: 'Success',
        maxcardno: '162729252926',
        tel: '0987654321',
        date: '2022-07-01 00:00:00',
        status: 'สำเร็จ',
        price: 50.00
    }, {
        Respmessage: 'Success',
        maxcardno: '162729252926',
        tel: '0987654321',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 50.00
    }, {
        Respmessage: 'Success',
        maxcardno: '17631773897',
        tel: '0123456789',
        date: '2022-07-01 00:00:00',
        status: 'รายการยกเลิก',
        price: 100.00
    }]
    if (token == '1234') {
        try {
            return res.status(200).json(data)
        } catch (er) {
            console.log("error ===>", er)
            return res.status(500).json({
                error: err.message
            })
        }
    }
})