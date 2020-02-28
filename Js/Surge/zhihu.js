[Rule]

URL-REGEX,^https:\/\/api\.zhihu\.com\/answers\/.*\/comments\/featured-comment,REJECT-TINYGIF

URL-REGEX,^https:\/\/api.zhihu.com\/appview/api\/v4/answers/.*/recommendations,REJECT-TINYGIF

IP-CIDR,118.89.204.198/32,REJECT

[Script]

http-response https://api.zhihu.com/topstory/follow requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js

http-response https://api.zhihu.com/topstory/recommend requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js,script-update-interval=0

http-response https://api.zhihu.com/.*/questions requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js

http-response https://api.zhihu.com/market/header requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js

// hostname= api.zhihu.com,www.zhihu.com