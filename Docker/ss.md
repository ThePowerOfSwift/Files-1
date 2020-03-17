shadowsocks-libev Docker


拉取docker镜像

 docker pull teddysun/shadowsocks-libev
Shell

创建 /etc/shadowsocks-libev/config.json 


 mkdir -p /etc/shadowsocks-libev
 
 
JavaScript

 JSON 
/*

  touch /etc/shadowsocks-libev/config.json

*/

{
"server":"0.0.0.0",
"server_port":9000,
"password":"password0",
"timeout":300,
"method":"aes-256-gcm",
"fast_open":true,
"nameserver":"8.8.8.8",
"mode":"tcp_and_udp"
}
JavaScript


simple-obfs JSON


/*
 
touch /etc/shadowsocks-libev/config.json

*/

{
"server":"0.0.0.0",
"server_port":9000,
"password":"password0",
"timeout":300,
"method":"aes-256-gcm",
"fast_open":true,
"nameserver":"8.8.8.8",
"mode":"tcp_and_udp",
"plugin":"obfs-server",
"plugin_opts":"obfs=tls"
}
JavaScript


v2ray-plugin JSON


/*

touch /etc/shadowsocks-libev/config.json

*/

{
"server":"0.0.0.0",
"server_port":9000,
"password":"password0",
"timeout":300,
"method":"aes-256-gcm",
"fast_open":true,
"nameserver":"8.8.8.8",
"mode":"tcp_and_udp",
"plugin":"v2ray-plugin",
"plugin_opts":"server"
}
JavaScript

更多的 v2ray-plugin 配置

touch /etc/shadowsocks-libev/config.json
JavaScript

 端口 9000  支持开启 TCP and UDP
 
 docker run -d -p 9000:9000 -p 9000:9000/udp --name ss-libev --restart=always -v /etc/shadowsocks-libev:/etc/shadowsocks-libev teddysun/shadowsocks-libev
JavaScript

记得开启防火墙，加入9000为白名单
