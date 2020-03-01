cron "0 17 8 * * ？" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js,script-update-interval=0

http-request https:\/\/manga\.bilibili\.com\/.*\.User\/GetWallet max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js

cron "0 18 8 * * ?" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/iQIYI-DailyBonus/iQIYI_DailyBonus.js,script-update-interval=0

http-request https?:\/\/.*\.iqiyi\.com\/.*authcookie= script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/iQIYI-DailyBonus/iQIYI_GetCookie.js,script-update-interval=0

cron "0 19 8 * * ?" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/elemSign.js,script-update-interval=0

http-request ^https:\/\/h5\.ele\.me\/restapi\/eus\/v\d\/current_user$ script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/elemGetCookies.js,script-update-interval=0

cron "0 20 8 * * ?" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/v2ex/v2ex.js,script-update-interval=0

http-request ^https:\/\/www\.v2ex\.com\/mission\/daily script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/v2ex/v2ex.cookie.js

cron "0 21 8 * * ?" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.js,script-update-interval=0

http-request ^https?:\/\/mobwsa\.ximalaya\.com\/mobile\-user\/homePage\/.* script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.cookie.js,script-update-interval=0

cron "0 22 8 * * ?" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/52pojie.js,script-update-interval=0

http-request https:\/\/www\.52pojie\.cn\/home\.php\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/Get-Cookie.js

cron "0 29 8 * * ?" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js,script-update-interval=3600

http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

cron "0 24 8 * * ?" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.js,script-update-interval=0

http-response ^https:\/\/wapside.189.cn:9001\/api\/home\/homeInfo requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.cookie.js,script-update-interval=0

http-response ^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Scripting/master/Pdfexpert.vip.js,script-update-interval=0

http-response ^https:\/\/photos\.adobe\.io\/v2\/accounts* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/Lightroom.js,script-update-interval=0

http-response ^https:\/\/api\.calm\.com\/me$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/calm.vip.js,script-update-interval=0

http-response ^https:\/\/nomo\.dafork\.com\/api\/v2\/iap\/ios_product_list requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/hello1983/surge4/master/js/nomo.js,script-update-interval=0

http-response https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/draft.js,script-update-interval=0

http-response ^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/documents.js,script-update-interval=10800

http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://Choler.github.io/Surge/Script/YouTube.js,script-update-interval=10800

http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js,script-update-interval=10800

http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js,script-update-interval=10800

http-response ^https://i.weread.qq.com/pay/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/hello1983/surge4/master/surge%204/surge-js/weixin/dushu/wxds.js,script-update-interval=0

http-response https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Termius.js

http-response https://api.zhihu.com/moments\?(action|feed_type) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js

http-response https://api.zhihu.com/topstory/recommend requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js

http-response https://api.zhihu.com/v4/questions requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js

http-response https://api.zhihu.com/people/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20people.js

http-request https?:\/\/musicpay\.kuwo.cn\/music\.pay\?uid=\d+ script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/KuWoMusicDownload.js

http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

http-response ^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/dqsj.js

http-response ^https:\/\/api\.diyidan\.net\/v0\.3\/(user\/personal_homepage|vip_user\/info|tv_series\/index\?appChanne) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/Diyidan.js

http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js,script-update-interval=0

http-response ^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/photoshop.js,script-update-interval=0

http-response ^https://tncj.hortorgames.com/chicken/fight/(answer|findQuiz) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/tncj/tncj.min.js

http-response ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ requires-body=1,max-size=262144,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/verify_receipt.js,script-update-interval=0

http-response https://api.bilibili.com/pgc/view/app/season requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/UnblockBangumi/master/surge/surge%20bilibili%20season.js

http-response https://api.bilibili.com/pgc/player/api/playurl requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/UnblockBangumi/master/surge/surge%20bilibili%20playurl.js
