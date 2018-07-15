var ZaloOA = require('zalo-sdk').ZaloOA;
var crypto = require('crypto');
var SHA256 = require('crypto-js/sha256');


var d = new Date();
var now = new Date();

d.setDate(14);
d.setFullYear(2018);
d.setHours(13,42,59,000);
d.setMonth(6);

var oaid = '';
var sckey = '';
var zaConfig = {
    oaid: oaid,
    secretkey: sckey
}
var ZOAClient = new ZaloOA(zaConfig);
//console.log(ZOAClient);






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
                    title: '',
                    description: '',
                    thumb: '',
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






