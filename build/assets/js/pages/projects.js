window.addEventListener("load",function(){function t(){var t=this.parentNode.firstChild,e=t.src.replace(/\/([^\/]*)$/,"/,$1").replace(/_/g,",_,").replace(/\.([^\.]*)$/,",.$1").split(",");1==e[3]?("Aplite"===t.dataset.screen&&(e[3]=t.dataset.aplite),"Basalt"===t.dataset.screen&&(e[3]=t.dataset.basalt),"Chalk"===t.dataset.screen&&(e[3]=t.dataset.chalk)):e[3]--,t.setAttribute("src",e.join(""))}function e(){var t=this.parentNode.firstChild,e=t.src.replace(/\/([^\/]*)$/,"/,$1").replace(/_/g,",_,").replace(/\.([^\.]*)$/,",.$1").split(",");"Aplite"===t.dataset.screen&&e[3]===t.dataset.aplite||"Basalt"===t.dataset.screen&&e[3]===t.dataset.basalt||"Chalk"===t.dataset.screen&&e[3]===t.dataset.chalk?e[3]=1:e[3]++,t.setAttribute("src",e.join(""))}function a(){const t=this.parentNode.parentNode.parentNode.firstChild.firstChild;var e=t.src.replace(/\/([^\/]*)$/,"/,$1").replace(/_/g,",_,").replace(/\.([^\.]*)$/,",.$1").split(",");e[1]=this.dataset.watch,e[3]=1,t.dataset.screen=this.dataset.watch,t.setAttribute("src",e.join("")),t.dataset.screen!=t.classList&&(t.classList.remove(t.classList),t.classList.add(this.dataset.screen))}const s=(document.querySelectorAll("img[data-screen]"),document.querySelectorAll("#img-left")),c=document.querySelectorAll("#img-right"),r=document.querySelectorAll(".watch"),i=document.querySelectorAll("#flip-button");s.forEach(function(e){e.addEventListener("click",t)}),c.forEach(function(t){t.addEventListener("click",e)}),r.forEach(function(t){t.addEventListener("click",a)}),i.forEach(function(t){t.addEventListener("click",function(){this.parentNode.parentNode.parentNode.classList.toggle("flip")})})});