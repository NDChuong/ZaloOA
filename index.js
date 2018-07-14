var ZaloOA = require('zalo-sdk').ZaloOA;
var crypto = require('crypto');
var SHA256 = require('crypto-js/sha256');


var d = new Date();
var now = new Date();

d.setDate(14);
d.setFullYear(2018);
d.setHours(13,42,59,000);
d.setMonth(6);

var zaConfig = {
    oaid: '53425692806963372',
    secretkey: 'ZET7wmwkMDVk41YqnQKW'
}
var ZOAClient = new ZaloOA(zaConfig);
//console.log(ZOAClient);

var oaId = '53425692806963372';
var sk = 'ZET7wmwkMDVk41YqnQKW';
// var uid = 841635252711;

// var url = 'https://openapi.zaloapp.com/oa/v1/getfollowers';
var userId = '841635252711';
var data = { "offset": 0, "count": 50 };

// console.log(Date.now());
// console.log(mac);
// ZOAClient.api('getprofile',{uid:userId}, function(response){
//     console.log(response);
// })

var mac = SHA256(oaId + data + Date.now() + sk).toString();

ZOAClient.api('getfollowers', { oaid: oaId, data: data, timestamp: Date.now(), mac: mac }, function (response) {
    setTimeout(function(){
        response.data.followers.forEach(function(entry){
            // var _data = {
            //     "userID": response.data.followers,
            //     "message": "Welcome VNG Strategy Forum"
            // }
            console.log(entry);
            console.log("ok");
            
            var params = {
                uid: entry.uid,
                actionlist: [{
                    action: 'oa.open.inapp',
                    title: 'VNG Strategy Forum -  August 18-20, 2017',
                    description: 'Anh/chị vui lòng tập trung vào lúc 6:00AM tại sảnh tòa nhà Flemington. BTC sẽ check-in, hỗ trợ di chuyển hành lý và xe sẽ khởi hành đi The Grand Ho Tram Strip vào lúc 6:30AM. BTC có chuẩn bị phần ăn sáng cho anh/chị tại Mekong Rest Stop vào lúc 7:30AM nên mọi người không cần ăn sáng trước nha. Chúc anh/chị ngủ ngon và hẹn gặp lại vào lúc 6:00AM sáng mai nhé. \nBTC,',
                    thumb: 'https://i.imgur.com/qzsS9Ui.png',
                    //href: 'https://developers.zalo.me',
                   // data: 'https://developers.zalo.me',
                    // popup: {
                    //     title: 'Open Website Zalo For Developers',
                    //     desc: 'Click ok to visit Zalo For Developers and read more Document',
                    //     ok: 'ok',
                    //     cancel: 'cancel'
                    // }
                }]
            }
            ZOAClient.api('sendmessage/actionlist', 'POST', params, function(response) {
                console.log(response);
            })
        });
    }, d.getTime()-now.getTime());
}); 






