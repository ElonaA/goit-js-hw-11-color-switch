(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(t,o,n){},QfWi:function(t,o,n){"use strict";n.r(o);var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r={startButton:document.querySelector('button[data-action="start"]'),stopButton:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body"),colorWrapper:document.querySelector(".js-wrapper")},c=null,u=null,a=!1;r.startButton.addEventListener("click",(function(){if(a)return;a=!0,u=setInterval((function(){var t;c=function t(o){var n=e.length,r=e[Math.floor(Math.random()*(n-0))+0];r===o&&(r=t(o));return r}(c),t=c,r.body.style.backgroundColor=t,function(t){r.colorWrapper.textContent=t}(c),console.log("randomColor :>> ",c)}),1e3)})),r.stopButton.addEventListener("click",(function(){clearInterval(u),a=!1}));n("OPH6")}},[["QfWi",1]]]);
//# sourceMappingURL=main.43a874e6d1d8ac463a06.js.map