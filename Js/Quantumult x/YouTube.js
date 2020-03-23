



/*

[Script]

^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url script-response-body https://Choler.github.io/Surge/Script/YouTube.js

[MITM]

hostname = *.googlevideo.com

*/

var data = {
  body: "{}",
    headers: {
        "Content-Type": "multipart/byteranges"
          }
          };
          $done({response: data});


