"use strict";window.addEventListener("load",function(){function t(){var t=this.parentNode.firstChild,e=t.src.replace(/\/([^\/]*)$/,"/,$1").replace(/_/g,",_,").replace(/\.([^\.]*)$/,",.$1").split(",");"1"===e[3]?("aplite"===t.id&&(e[3]=t.dataset.aplite),"basalt"===t.id&&(e[3]=t.dataset.basalt),"chalk"===t.id&&(e[3]=t.dataset.chalk)):e[3]--,t.setAttribute("src",e.join(""))}function e(){var t=this.parentNode.firstChild,e=t.src.replace(/\/([^\/]*)$/,"/,$1").replace(/_/g,",_,").replace(/\.([^\.]*)$/,",.$1").split(",");"aplite"===t.id&&e[3]===t.dataset.aplite||"basalt"===t.id&&e[3]===t.dataset.basalt||"chalk"===t.id&&e[3]===t.dataset.chalk?e[3]=1:e[3]++,t.setAttribute("src",e.join(""))}function a(){var t=this.parentNode.parentNode.parentNode,e=this.parentNode.parentNode.parentNode.firstChild.firstChild,a=this.dataset.watch,i=e.src.replace(/\/([^\/]*)$/,"/,$1").replace(/_/g,",_,").replace(/\.([^\.]*)$/,",.$1").split(",");i[1]=a,i[3]=1,e.id=a.toLowerCase(),t.id=a.toLowerCase(),t.firstChild.id=a.toLowerCase(),t.lastChild.id=a.toLowerCase(),e.setAttribute("src",i.join("")),t.parentNode.classList.toggle("flip")}var i=document.querySelectorAll("#img-left"),r=document.querySelectorAll("#img-right"),l=document.querySelectorAll(".watch"),c=document.querySelectorAll("#flip-button");i.forEach(function(e){e.addEventListener("click",t)}),r.forEach(function(t){t.addEventListener("click",e)}),l.forEach(function(t){t.addEventListener("click",a)}),c.forEach(function(t){t.addEventListener("click",function(){t.parentNode.classList.toggle("flip")})})});