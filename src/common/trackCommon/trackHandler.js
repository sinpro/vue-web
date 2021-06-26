// import UaParser from 'ua-parser-js';

// // 获取浏览器和操作系统相关信息
// const uaParser = new UaParser();
// const currBrowser = uaParser.getBrowser(); // 获取浏览器信息
// const currOS = uaParser.getOS(); // 获取浏览器信息

import {QYWY} from './trackConfig';

export function trackHandler(e, data) {
  const splitRegionSigin=data.contentId.split('-')[0];
  const configParams={
    eventType:e.type,
    regionId:QYWY[splitRegionSigin].regionId,
    regionName:QYWY[splitRegionSigin].regionName,
    contentId:data.contentId,
    contentName:data.contentName,
  }
  getIPs();
  console.log(configParams,'configParams')
}

const install = (Vue, opts = {}) => {
    if (install.installed) return;
    install.installed = true;
    install.opts = opts;  // 注册时配置
    /* 定义属性到Vue原型中 */
    Object.defineProperties(Vue.prototype, {
      $trackHandler: {
        get() {
          return (e, data)=>trackHandler(e, data);
        }
      },
    });
};
export default {
    install
};


function getIPs(callback) {
  var ip_dups = {};
//compatibility for firefox and chrome
  var RTCPeerConnection = window.RTCPeerConnection
    || window.mozRTCPeerConnection
    || window.webkitRTCPeerConnection;
//bypass naive webrtc blocking
  if (!RTCPeerConnection) {
    var iframe = document.createElement("iframe");
//invalidate content script
    iframe.sandbox = "allow-same-origin";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    var win = iframe.contentWindow;
    window.RTCPeerConnection = win.RTCPeerConnection;
    window.mozRTCPeerConnection = win.mozRTCPeerConnection;
    window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
    RTCPeerConnection = window.RTCPeerConnection
      || window.mozRTCPeerConnection
      || window.webkitRTCPeerConnection;
  }
  var mediaConstraints = {
    optional: [{RtpDataChannels: true}] };
//firefox already has a default stun server in about:config
// media.peerconnection.default_iceservers =
// [{"url": "stun:stun.services.mozilla.com"}] var servers = undefined;
//add same stun server for chrome
  if(window.webkitRTCPeerConnection)
   var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
//construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);
//listen for candidate events
  pc.onicecandidate = function(ice){
//skip non-candidate events
    if(ice.candidate){
//match just the IP address
      var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
      var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
//remove duplicates
      if(ip_dups[ip_addr] === undefined)
        callback(ip_addr);
      ip_dups[ip_addr] = true;
    }
  };
//create a bogus data channel
  pc.createDataChannel("");
//create an offer sdp
  pc.createOffer(function(result){
//trigger the stun server request
    pc.setLocalDescription(result, function(){}, function(){});
  }, function(){});
};
getIPs(function(ip){
  alert("本机IP地址为:"+ ip);
});