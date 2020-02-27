/*

surge:


http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js,script-update-interval=0


[URL Rewrite]



^https?://p\.du\.163\.com/readtime/info.json - reject




QX:

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body wnyd.js


[mimt]

hostname=p.du.163.com



*/




var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});

//By yxiaocai & JO2EY




