(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var T="previous",j="current",q="next",O=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0";return e<10?t+e:e},v=function(e){return"".concat(e.getFullYear(),"-").concat(O(e.getMonth()+1),"-").concat(O(e.getDate()))},D=function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},S=function(e){return new Promise(function(t){var n=[],a=W(e).map(function(o){return{date:o.date,iso:o.iso,type:T}}),r=P(e).map(function(o){return{date:o.date,iso:o.iso,type:j}});n=n.concat(a).concat(r);var c=C(e,n.length).map(function(o){return{date:o.date,iso:o.iso,type:q}});t(n.concat(c))})},w=function(e){return function(t){return Array(e).fill().map(t)}},P=function(e){var t=D(e);return w(t)(function(n,a){var r=a+1;return e.setDate(r),{date:r,iso:v(e)}})},W=function(e){var t,n,a=e.getMonth(),r=e.getFullYear(),c=Math.min(a-1,11),o=new Date(r,c),s=D(o),i=s-(t=e,n=new Date(t.getFullYear(),t.getMonth(),1).toDateString().substring(0,3),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(n))+1;return w(s-i+1)(function(d,u){var f=i+u;return o.setDate(f),{date:f,iso:v(o)}})},C=function(e,t){var n=42-t,a=e.getMonth()+1===12?0:e.getMonth()+1,r=a===0?e.getFullYear()+1:e.getFullYear(),c=new Date(r,a);return w(n)(function(o,s){var i=s+1;return c.setDate(i),{date:i,iso:v(c)}})},I=function(){function e(){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,e)}var t,n;return t=e,(n=[{key:"getDates",value:function(a){return new Promise(function(r){return r(S(a).then(function(c){return c.map(function(o){return o})}))})}},{key:"getMatrix",value:function(a){return new Promise(function(r){r(S(a).then(function(c){return c.reduce(function(o,s,i){return(i%7==0?o.push([s]):o[o.length-1].push(s))&&o},[])}))})}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=I;const h=new N,p=document.querySelector(".js-open-calendar"),x=document.querySelector(".js-calendar-container"),Y=document.querySelector(".calendar__month-btn--next"),H=document.querySelector(".calendar__month-btn--prev"),B=document.querySelector(".calendar__year-btn"),l=["January","February","March","April","May","June","July","August","September","October","November","December"];B.addEventListener("click",V);Y.addEventListener("click",J);H.addEventListener("click",G);p.addEventListener("click",F);function F(){const e=p.getAttribute("aria-expanded")==="true"||!1;p.setAttribute("aria-expanded",!e),p.classList.toggle("reversed"),x.classList.toggle("is-open")}const R=async()=>{const e=await h.getMatrix(new Date);console.log("🚀 ~ file: calendar.js:17 ~ main ~ datesArr",e);const t=new Date,n=[l[t.getMonth()],t.getFullYear()],a=_(e);g(a),m(n)};async function J(){const t=document.querySelector(".calendar__month").textContent.split(" ");let n=U(t);const a=await h.getMatrix(new Date(`${t[1]}, ${l[n]}`)),r=_(a);console.log("🚀 ~ file: calendar.js:28 ~ main ~ croppedArr",r),g(r),m([l[n],t[1]])}async function G(){const t=document.querySelector(".calendar__month").textContent.split(" ");let n=K(t);const a=await h.getMatrix(new Date(`${t[1]}, ${l[n]}`)),r=_(a);console.log("🚀 ~ file: calendar.js:28 ~ main ~ croppedArr",r),g(r),m([l[n],t[1]])}function K(e){let t=l.indexOf(e[0]);return console.log("date:",e),console.log("index:",t),t===0?(t=11,e[1]=+e[1]-1,console.log("date:",e)):t-=1,t}function U(e){let t=l.indexOf(e[0]);return console.log("date:",e),t===11?(t=0,e[1]=+e[1]+1,console.log("date:",e)):t+=1,t}async function V(){const t=document.querySelector(".calendar__month").textContent.split(" ");t[1]=+t[1]+1;let n=l.indexOf(t[0]);const a=await h.getMatrix(new Date(`${t[1]}, ${l[n]}`)),r=_(a);console.log("🚀 ~ file: calendar.js:28 ~ main ~ croppedArr",r),g(r),m([l[n],t[1]])}function m([e,t]){const n=document.querySelector(".calendar__body-caption"),a=n.querySelector("p");a&&a.remove(),n.insertAdjacentHTML("afterbegin",`<p class="calendar__month">${e} ${t}</p>`)}function g(e){const t=document.querySelector(".calendar__list"),n=new Date().getDate();t.innerHTML=`${e.map(a=>n===a.date?`<li id="${a.iso}" class="calendar__date calendar__date--active">${a.date}</li>`:`<li id="${a.iso}" class="calendar__date">${a.date}</li>`).join("")}`}function _(e){const t=e.flat();return console.log("cropped",t),[...t].slice(1,36)}x.addEventListener("click",z);function z(e){if(!e.target.classList.contains("calendar__date"))return;const n=e.target,a=document.querySelector(".calendar__date--active");a===n?(p.value="",a.classList.remove("calendar__date--active")):(Q(),Z(n))}function Q(){const e=document.querySelector(".calendar__date.calendar__date--active");console.log("🚀 ~ file: calendar.js:181 ~ removeActiveDateClass ~ currentActiveDate",e),e&&e.classList.remove("calendar__date--active")}function X(e){const t=e.id.split("-").reverse().join("/");return p.value=t,t}function Z(e){e.classList.add("calendar__date--active"),X(e)}R();const ee="api-key=9GYTd3hNgT1cJMME7q1HMJAu02NGsmfm",te="https://api.nytimes.com";function ne(){try{return fetch(`${te}/svc/mostpopular/v2/viewed/1.json?${ee}`).then(e=>{if(!e.ok)throw new Error("Such a request has not been found");return e.json()}).then(({results:e})=>e)}catch(e){console.log(e.message)}}class ae{constructor(){this.API_KEY="api-key=9GYTd3hNgT1cJMME7q1HMJAu02NGsmfm",this.API_HOST="https://api.nytimes.com",this.WEB_HOST="https://www.nytimes.com",this.BASE_ENDPOINT_URL=`${this.API_HOST}/svc/topstories/v2/arts.json?${this.API_KEY}`,this.SEARCH_ENDPOINT_URL=`${this.API_HOST}/svc/search/v2/articlesearch.json?`,this.ATEGOTY_END_POINT=`${this.API_HOST}/svc/news/v3/content/all/`}}const re=document.querySelector(".page-header");function oe(e){return e.map(a=>{const{section:r,title:c,description:o,url:s,date:i,img:d,imgCaption:u}=a;return`
            <div class="news-card">
                <img width="396" src="${d}" alt="${u}">
                <span>${r}</span>
                <h2>${c}</h2>
                <p>${o}</p>
                <span>${i}</span>
                <a href="${s}">Read more</a>
            </div>
        `}).join("")}function ce(e){re.insertAdjacentHTML("afterend",e)}const y=new ae,ie=document.querySelector(".page-header__search-input");ie.addEventListener("change",se);function se(e){const t=e.target.value;console.log(t),le(t)}const le=async e=>{try{const t=await fetch(`${y.SEARCH_ENDPOINT_URL}q=${e}&${y.API_KEY}`);if(t.ok===!1)throw new Error("Such a request has not been found");const a=(await t.json()).response.docs;console.log(a),de(a)}catch(t){console.log(t.message)}};function de(e){const t=e.map(a=>({section:a.section_name||a.section,title:a.title||a.headline.main,description:a.abstract,url:a.web_url||a.url,date:a.pub_date||a.created_date,img:`${y.WEB_HOST}/${a.multimedia[1].url}`}));console.log(t);const n=oe(t);ce(n)}const M=document.querySelector(".category__btn"),A=document.querySelector(".js-list-container");M.addEventListener("click",ue);function ue(){M.classList.toggle("isActiveBtn"),A.classList.toggle("is-open"),A.classList.toggle("list-container--animation")}function pe(e){return fe(e).map(n=>{if(!n)return;const{section:a,title:r,description:c,url:o,date:s,img:i,imgCaption:d}=n;return`<li class="article">
     <div class="article_img_wrapper">
       <p class="already-read">Already read</p>
       <p class="article_category">${a}</p>
       <img class="article_img" src="${i[i.length-1].url}" alt="${d}" width="395" height="395">
       <div class="article_flag">
       <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
         <svg width="16" height="16">
         <use href="../images/icon-sprites.svg#heart_contur" width="16" height="16"></use>
        </svg>
         </button>
         <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
         <svg width="16" height="16">
         <use href="../images/icon-sprites.svg#heart_fill" width="16" height="16"></use>
       </svg>
          </button>
         </div>
     </div>
     <div class="article_text_wrapper">
       <h2 class="article_title">${r}</h2>
       <p class="article_text">${c}</p>
     </div>
     <div class="article_info_wrapper">
       <p class="article_date">${s}</p>
       <a href="${o}" class="read-more">Read more</a>
     </div>
     </li>`}).join("")}function fe(e){try{return e.map(n=>{if(n.media.length!==0)return{section:n.section_name||n.section,title:n.title||n.headline.main,description:n.abstract,url:n.web_url||n.url,date:n.pub_date||n.created_date||n.published_date,img:n.media[0]["media-metadata"],imgCaption:n.media[0].caption}})}catch(t){console.error(t)}}const b=document.querySelector(".articles_container");document.addEventListener("DOMContentLoaded",he);function he(e){e.preventDefault(),ne().then(t=>pe(t)).then(t=>{b.insertAdjacentHTML("beforeend",t)}).then(()=>{const t=[...b.querySelectorAll(".article_text")];me(t)})}function me(e){e.forEach(t=>{if(t.textContent.length>150){const n=t.textContent.slice(0,150);t.textContent=`${n}...`}})}const ge=document.querySelector("main"),k="419bd34d8daba21c0a4890e35d027d3f";document.addEventListener("DOMContentLoaded",_e);function $(e){Se(e).then(n=>{n!==void 0&&ve(n)})}function _e(){navigator.geolocation?navigator.geolocation.getCurrentPosition(ye,be):alert("Your browser does not support geolocation")}function ye(e){const{latitude:t,longitude:n}=e.coords,a=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&units=metric&appid=${k}`;$(a)}function ve(e){const{name:t}=e,{temp:n}=e.main,{main:a,icon:r}=e.weather[0],c=new Date,{dayOfWeek:o,dateOfWeek:s,monthOfWeek:i}=Ae(c.toUTCString()),d=we(s,i,c),u={temp:Math.floor(n),typeWeather:a,city:t,srcIcon:Oe(r),dayOfWeak:o,dateOfWeak:d,imgOpacity:"",dateOpacity:"",splitterOpacity:"",typegroupOpacity:"",textSymbol:"&#176;"};E(u)}function we(e,t,n){return e+" "+t+" "+n.getFullYear()}function Oe(e){return`https://openweathermap.org/img/wn/${e}.png`}function Se(e){return fetch(e).then(n=>{if(n.ok)return n.json();E({temp:"no-",typeWeather:"",city:"",srcIcon:"",dayOfWeak:"",dateOfWeak:"",imgOpacity:" opacityElement",dateOpacity:" opacityElement",splitterOpacity:" opacityElement",typegroupOpacity:" opacityElement",textSymbol:"data"})})}function E(e){const t=De(e);ge.insertAdjacentHTML("afterend",t)}function Ae(e){const t=e.indexOf(","),n=e.substr(0,t).trim(),a=e.substr(t+1).trim(),r=a.indexOf(" "),c=a.substr(0,r).trim(),o=a.substr(r+1).trim(),s=o.indexOf(" "),i=o.substr(0,s).trim();return{dayOfWeek:n,monthOfWeek:i,dateOfWeek:c}}function be(){const e=`https://api.openweathermap.org/data/2.5/weather?q=lONDON&lang=en&units=metric&appid=${k}`;$(e)}function De(e){const{temp:t,typeWeather:n,city:a,srcIcon:r,dayOfWeak:c,dateOfWeak:o,imgOpacity:s,dateOpacity:i,splitterOpacity:d,typegroupOpacity:u,textSymbol:f}=e;return'<section class="weather"><div class="weather__group"><div class="weather__temperaturedate"><span class="weather__temperature">'+String(t)+'</span><span class="weather__symbol" >'+f+'</span></div ><div class="weather__splitter'+d+'"></div > <div class="weather__typegroup'+u+'"><span class="weather__type">'+String(n)+'</span > <div class="weather__citygroup"><svg class="weather__svg"><use href="../img/icon-sprites.svg#location"></use></svg > <p class="weather__city">'+String(a)+'</p > </div ></div ></div ><div class="weather__img'+s+'"><img class="weather__imgvalue" src="'+String(r)+'" alt=""></div ><div class="weather__date'+i+'"><span class="weather__dayofweek">'+String(c)+'</span > <span class="weather__dateofweek">'+String(o)+'</span></div><div class="weather__refgroup"><a class="weather__ref" href="https://sinoptik.ua/" rel="noopener noreferrer" target="_blank">weather for week</a ></div ></section > '}
