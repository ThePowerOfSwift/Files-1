/*

#京东成长分签到

QX:

^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/queryUserSignFlow url script-request-header jdczfcookie.js

Surge:

cron "0 28 11 * * ?" script-path=https://raw.githubusercontent.com/hello1983/Files/master/Js/Surge/jdczf.js,script-update-interval=0

http-request ^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/queryUserSignFlow script-path=https://raw.githubusercontent.com/hello1983/Files/master/Js/Surge/jdczfcookie.js,script-update-interval=0

ms.jr.jd.com

*/

const cookieName = '京东成长分'
const cookieKey = 'chen_cookie_jingdong'
const chen = init()
const cookieVal = $request.headers['Cookie']
if (cookieVal) {
  if (chen.setdata(cookieVal, cookieKey)) {
    chen.msg(`${cookieName}`, '获取Cookie: 成功', '')
    chen.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
  }
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
chen.done()
