!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s="./src/frontend/main.js")}({"./src/frontend/main.js":function(e,n,r){r("./src/styles/main.css"),r("./src/images/archerBoy.png"),r("./src/views/index.ejs"),r("./src/frontend/player/canvas.js"),console.log("hello")},"./src/frontend/player/canvas.js":function(e,n,r){var t=r("./src/frontend/player/player.js"),o=t.ctx,d=r("./src/frontend/player/events.js"),a=d.keydown,s=d.keyup,c=d.touchstart,i=d.touchend,y=r("./src/frontend/player/drawPlayer.js").drawPlayer;!function e(){o.clearRect(0,0,canvas.width,canvas.height),y(),t.x+=t.dx,t.y+=t.dy,function(){t.x<=-50&&(t.x=-50);t.x>=canvas.width-80&&(t.x=canvas.width-80);t.y<=-50&&(t.y=-50);t.y>=canvas.height-80&&(t.y=canvas.height-80)}(),requestAnimationFrame(e)}(),addEventListener("keydown",a),addEventListener("keyup",s),addEventListener("touchstart",c),addEventListener("touchend",i)},"./src/frontend/player/drawPlayer.js":function(e,n,r){var t=r("./src/frontend/player/player.js"),o=t.ctx;n.drawPlayer=function(){o.save(),!0===t.forward&&(o.scale(1,1),o.drawImage(t.image,t.x,t.y,t.w,t.h)),!1===t.forward&&(o.scale(-1,1),o.drawImage(t.image,-t.x,t.y,-t.w,t.h)),o.restore()}},"./src/frontend/player/events.js":function(e,n,r){var t=r("./src/frontend/player/player.js"),o=r("./src/frontend/player/moveingFunctions.js"),d=o.moveRight,a=o.moveLeft,s=o.moveUp,c=o.moveDown;n.keydown=function(e){39!==e.keyCode&&102!==e.keyCode||d(),37!==e.keyCode&&100!==e.keyCode||a(),38!==e.keyCode&&104!==e.keyCode||s(),40!==e.keyCode&&98!==e.keyCode||c(),105===e.keyCode&&(t.dx=t.speed,t.dy=-t.speed,t.forward=!0),103===e.keyCode&&(t.dx=-t.speed,t.dy=-t.speed,t.forward=!0),99===e.keyCode&&(t.dx=t.speed,t.dy=t.speed,t.forward=!0),97===e.keyCode&&(t.dx=-t.speed,t.dy=t.speed,t.forward=!0)},n.keyup=function(e){39!==e.keyCode&&37!==e.keyCode&&102!==e.keyCode&&100!==e.keyCode||(t.dx=0),38!==e.keyCode&&40!==e.keyCode&&104!==e.keyCode&&98!==e.keyCode||(t.dy=0),105!==e.keyCode&&103!==e.keyCode&&99!==e.keyCode&&97!==e.keyCode||(t.dx=0,t.dy=0)},n.touchstart=function(e){var n=e.touches[0].clientX,r=canvas.width/3*2,t=canvas.width/3,o=e.touches[0].clientY,i=canvas.height/3,y=canvas.height/3*2;n>r&&d(),n<t&&a(),o<i&&s(),o>y&&c()},n.touchend=function(e){e&&(t.dx=0,t.dy=0)}},"./src/frontend/player/moveingFunctions.js":function(e,n,r){var t=r("./src/frontend/player/player.js");n.moveRight=function(){t.dx=t.speed,t.forward=!0},n.moveLeft=function(){t.dx=-t.speed,t.forward=!1},n.moveUp=function(){t.dy=-t.speed},n.moveDown=function(){t.dy=t.speed}},"./src/frontend/player/player.js":function(e,n){var r=document.getElementById("canvas");r.width=window.innerWidth,r.height=window.innerHeight,e.exports={ctx:r.getContext("2d"),image:document.getElementById("image"),x:r.width/2-50,y:r.height/2-75,w:150,h:125,speed:10,dx:0,dy:0,forward:!0}},"./src/images/archerBoy.png":function(e,n,r){"use strict";r.r(n),n.default=r.p+"archerBoy.png"},"./src/styles/main.css":function(e,n,r){},"./src/views/index.ejs":function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n\t<meta charset="UTF-8">\r\n\t<title>Archer Boy!</title>\r\n\t<link rel="stylesheet" type="text/css" href="/main-bundle.css">\r\n</head>\r\n<body>\r\n\t<canvas id="canvas"></canvas>\r\n\t<img src="/archerBoy.png" alt="" id="image">\r\n\t<script src="/main-bundle.js"><\/script>\r\n</body>\r\n</html>';return __p}}});