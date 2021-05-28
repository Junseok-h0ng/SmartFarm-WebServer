const express = require('express');
const router = express.Router();

const {Farm} = require('../models/Farm');
const convert = require('xml-js');
const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config/key');


const fs = require('fs');

router.get('/',(req,res)=>{
    // res.send('fasd');
    res.json({'response':'success'})
});

router.post('/images',(req,res)=>{
    const files = ['sample1.jpg','sample2.jpg','sample3.jpg','sample4.jpg','sample5.jpg','sample6.jpg','sample7.jpg','sample8.jpg']
    const filesData = files.map((file)=>{
        return new Buffer(fs.readFileSync('uploads/'+file)).toString('base64');
    });
    res.send(filesData);
});

router.post('/',(req,res)=>{
    Farm.find({userId:req.body.userId,address:req.body.ipAddress})
    .exec((err,doc)=>{
        if (err) return res.status(401).send(err);
        //중복 등록 방지
        if(!doc[0]){
            const farm = new Farm(req.body);
            farm.save((err,doc)=>{
                if (err) return res.status(401).send(err);
                res.status(200).send(doc);
            });
        }else{
            return res.status(401).json('이미 등록된 정보입니다.');
        }
    });
});

// 농장 정보 가져오기
router.post('/info',(req,res)=>{
    Farm.find({userId:req.body.userId})
    .exec((err,doc)=>{
        if(err) return res.status(401).send(err);
        res.status(200).send(doc);
    });
});

router.post('/delete',(req,res)=>{
    Farm.deleteOne({_id:req.body._id})
    .exec((err,doc)=>{
        if(err) return res.status(401).send(err);
        res.status(200).send({success:true});
    });
});

router.post('/addCropsInfo',(req,res)=>{
    Farm.findByIdAndUpdate({_id:req.body._id},{crops:req.body.crops})
    .exec((err,doc)=>{
        if(err) return res.status(401).send(err);
        res.status(200).send({success:true});
    })
})

router.post('/getCropsTips',async (req,res)=>{
    const cropsId = req.body.cropsId;
    const getUrl = async () =>{
        try{
            return await axios.get(`https://www.nongsaro.go.kr/portal/ps/psb/psbl/workScheduleDtl.ps?menuId=PS00087&cntntsNo=${cropsId}&sKidofcomdtySeCode=FC`)
        }catch(err){
            return res.status(401).send(err)
        }
    }
    getUrl()
        .then(url => {
            // 해당 링크에서 가져온 데이터를 저장
            const $ = cheerio.load(url.data);
            // url에서 가져온 데이터들을 추출할 bodyList
            const $bodyList = $("div#contents").children("div#printZone");

            // 제목을 추출해줌
            const title = $bodyList.find('div#nongScheduleTit').children('div.floatDiv').text().replace(/(\r\n\t|\n|\t|\r\t)/gm,"");
            
            // 데이터들을 추출해줌
            let data = [];
            for(let i =1; i<=$bodyList.find('ul.listCon').children('li').length;i++){
                data.push($bodyList.find('ul.listCon').children(`li:nth-child(${i})`).text())   
            };

            // 리턴해줄 최종 데이터 값
            const response = {
                title,
                data
            }

            return response;
        }).then(response=>{res.send(response)});
});

router.post('/getCrops',async (req,res)=>{
    await axios.get(`http://api.nongsaro.go.kr/service/farmWorkingPlanNew/workScheduleLst?apiKey=${config.nongsaroAPI}&kidofcomdtySeCode=${req.body.id}`)
    .then((response)=>{
        const itemList = response.data;
        const xmlToJson = convert.xml2json(itemList,{compact:true,spaces:4});
        return JSON.parse(xmlToJson).response;
    }).then(response=>{
        let data = [];
        response.body.items.item.map((item)=>{
            data.push({
                id: item.cntntsNo._cdata,
                name: item.sj._cdata
            });
        })
        res.send(data);
    });
});

router.post('/getCrops/info',async(req,res)=>{
    await axios.get(`http://api.nongsaro.go.kr/service/farmWorkingPlanNew/workScheduleDtl?cntntsNo=${req.body.id}&apiKey=${config.nongsaroAPI}`)
    .then((response)=>{
        const itemList = response.data;
        const xmlToJson = convert.xml2json(itemList,{compact:true,spaces:4});
        return JSON.parse(xmlToJson).response;
    }).then(response=>{
        res.send(response.body.item.cn._cdata);
    })
});

router.post('/loadFarmData',(req,res)=>{
    let dateString = [];
    
    if(req.body.filterDateString){
        dateString = req.body.filterDateString;
    }else{
        dateString = req.body.dateString;
    }

    const filter = {
        start_date : dateString[0],
        end_date : dateString[1],
        image: false,
        chart: false,
        dashboard: false
    }

    if(req.body.option === 'image'){
        filter.image = true
    }else if(req.body.option === 'chart'){
        filter.chart = true
    }else{
        filter.dashboard = true
    }

    Farm.findById({_id:req.body.pid})
    .exec((err,doc)=>{
        if(err) return res.status(401).send(err);
        const ipAddress = doc.ipAddress;
            axios.post(ipAddress+'/data/',(filter),{timeout:500})
            .catch((err)=>{
                res.status(401).send(false);
            })
            .then((response)=>{
                res.status(200).send(response.data);
            });  
    });
});

router.post('/setFarmInfo',(req,res)=>{
    console.log(req.body);
    res.send();
});

module.exports = router;    