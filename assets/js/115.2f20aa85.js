(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{412:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"日常小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日常小技巧"}},[s._v("#")]),s._v(" 日常小技巧")]),s._v(" "),a("h2",{attrs:{id:"百度网盘加速播放-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度网盘加速播放-js"}},[s._v("#")]),s._v(" 百度网盘加速播放 js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.5)\n')])])]),a("h2",{attrs:{id:"update-notifier-造成-nodejs-进程过多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-notifier-造成-nodejs-进程过多"}},[s._v("#")]),s._v(" update_notifier 造成 nodejs 进程过多")]),s._v(" "),a("p",[s._v("某天突然机器很卡，webpack 无法启动，执行下 ps 发现全是 node 的进程有 600 多个")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps -ef | grep node | wc -l\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/nvm/versions/node/v11.15.0/bin/node /usr/local/nvm/versions/node/v11.15.0/lib/node_modules/npm/node_modules/update-notifier/check.js "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pkg"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.7.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("查阅相关资料后发现这个是 npm 的更新机制，如果连不上外网就会一直存在。")]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("div",{staticClass:"language-node extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps -ef |grep node |grep -v 'grep'|awk '{print $2}'|xargs kill -9\n")])])]),a("p",[s._v("可以设置 npmconfig 来禁止更新通知")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# https://github.com/yeoman/update-notifier#readme\n\n~/.config/configstore/update-notifier-npm.json\n\nNO_UPDATE_NOTIFIER:true\n")])])]),a("h2",{attrs:{id:"chrome-插件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-插件安装"}},[s._v("#")]),s._v(" chrome 插件安装")]),s._v(" "),a("p",[s._v("https://crxdl.com/ 离线包，然后下载之后将解压出来的 crx 文件修改后缀名为 zip 文件，直接拖 zip 到 chrome 扩展界面即可")])])}),[],!1,null,null,null);a.default=n.exports}}]);