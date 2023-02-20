(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const d={categoryBtnEl:document.querySelector(".category__btn"),listConteinerEl:document.querySelector(".js-list-container"),btnOpenModal:document.querySelectorAll(".js-open-list"),viewportWidth:window.innerWidth,sectionRestList:document.querySelector(".rest__list"),categoryWrap:document.querySelector(".js-category__wrap"),categoryBtns:document.querySelectorAll(".js-category__btn")},H={search:document.querySelector(".js-search"),burgerMenu:document.querySelector(".js-menu-open"),searchInput:document.querySelector(".js-search-input"),body:document.querySelector("body")};H.search.addEventListener("click",V);function V(e){e.preventDefault(),H.searchInput.innerHTML='<input type="search" placeholder="Search" class="page-header__search-input">'}function z(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var Q="previous",X="current",Z="next",P=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0";return e<10?n+e:e},L=function(e){return"".concat(e.getFullYear(),"-").concat(P(e.getMonth()+1),"-").concat(P(e.getDate()))},N=function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},C=function(e){return new Promise(function(n){var t=[],a=te(e).map(function(i){return{date:i.date,iso:i.iso,type:Q}}),r=ee(e).map(function(i){return{date:i.date,iso:i.iso,type:X}});t=t.concat(a).concat(r);var o=ne(e,t.length).map(function(i){return{date:i.date,iso:i.iso,type:Z}});n(t.concat(o))})},M=function(e){return function(n){return Array(e).fill().map(n)}},ee=function(e){var n=N(e);return M(n)(function(t,a){var r=a+1;return e.setDate(r),{date:r,iso:L(e)}})},te=function(e){var n,t,a=e.getMonth(),r=e.getFullYear(),o=Math.min(a-1,11),i=new Date(r,o),c=N(i),s=c-(n=e,t=new Date(n.getFullYear(),n.getMonth(),1).toDateString().substring(0,3),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t))+1;return M(c-s+1)(function(u,f){var l=s+f;return i.setDate(l),{date:l,iso:L(i)}})},ne=function(e,n){var t=42-n,a=e.getMonth()+1===12?0:e.getMonth()+1,r=a===0?e.getFullYear()+1:e.getFullYear(),o=new Date(r,a);return M(t)(function(i,c){var s=c+1;return o.setDate(s),{date:s,iso:L(o)}})},ae=function(){function e(){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,e)}var n,t;return n=e,(t=[{key:"getDates",value:function(a){return new Promise(function(r){return r(C(a).then(function(o){return o.map(function(i){return i})}))})}},{key:"getMatrix",value:function(a){return new Promise(function(r){r(C(a).then(function(o){return o.reduce(function(i,c,s){return(s%7==0?i.push([c]):i[i.length-1].push(c))&&i},[])}))})}}])&&z(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),re=ae;const y=new re,x=document.querySelector(".js-open-calendar"),k=document.querySelector(".calendar__input"),B=document.querySelector(".js-calendar-container"),oe=document.querySelector(".calendar__month-btn--next"),ie=document.querySelector(".calendar__month-btn--prev"),se=document.querySelector(".calendar__year-btn"),g=["January","February","March","April","May","June","July","August","September","October","November","December"];se.addEventListener("click",fe);oe.addEventListener("click",le);ie.addEventListener("click",de);x.addEventListener("click",Y);function Y(){const e=k.getAttribute("aria-expanded")==="true"||!1;x.setAttribute("aria-expanded",!e),x.classList.toggle("reversed"),B.classList.toggle("is-open")}const ce=async()=>{const e=await y.getMatrix(new Date);console.log("🚀 ~ file: calendar.js:17 ~ main ~ datesArr",e);const n=new Date,t=[g[n.getMonth()],n.getFullYear()],a=b(e);w(a),v(t)};async function le(){const n=document.querySelector(".calendar__month").textContent.split(" ");let t=pe(n);const a=await y.getMatrix(new Date(`${n[1]}, ${g[t]}`)),r=b(a);console.log("🚀 ~ file: calendar.js:28 ~ main ~ croppedArr",r),w(r),v([g[t],n[1]])}async function de(){const n=document.querySelector(".calendar__month").textContent.split(" ");let t=ue(n);const a=await y.getMatrix(new Date(`${n[1]}, ${g[t]}`)),r=b(a);console.log("🚀 ~ file: calendar.js:28 ~ main ~ croppedArr",r),w(r),v([g[t],n[1]])}function ue(e){let n=g.indexOf(e[0]);return console.log("date:",e),console.log("index:",n),n===0?(n=11,e[1]=+e[1]-1,console.log("date:",e)):n-=1,n}function pe(e){let n=g.indexOf(e[0]);return console.log("date:",e),n===11?(n=0,e[1]=+e[1]+1,console.log("date:",e)):n+=1,n}async function fe(){const n=document.querySelector(".calendar__month").textContent.split(" ");n[1]=+n[1]+1;let t=g.indexOf(n[0]);const a=await y.getMatrix(new Date(`${n[1]}, ${g[t]}`)),r=b(a);console.log("🚀 ~ file: calendar.js:28 ~ main ~ croppedArr",r),w(r),v([g[t],n[1]])}function v([e,n]){const t=document.querySelector(".calendar__body-caption"),a=t.querySelector("p");a&&a.remove(),t.insertAdjacentHTML("afterbegin",`<p class="calendar__month">${e} ${n}</p>`)}function w(e){const n=document.querySelector(".calendar__list"),t=new Date().getDate(),a=new Date;n.innerHTML=`${e.map(r=>{const o=new Date(r.iso).getDay();return t===r.date?`<li id="${r.iso}" class="calendar__date calendar__date--active">${r.date}</li>`:+a<new Date(r.iso)?`<li id="${r.iso}" class="calendar__date calendar__date--inactive">${r.date}</li>`:o===6||o===0?`<li id="${r.iso}" class="calendar__date calendar__date--weekend">${r.date}</li>`:`<li id="${r.iso}" class="calendar__date">${r.date}</li>`}).join("")}`}function ge(){const e=document.querySelector(".news-gallery");return e.innerHTML=`<div class="container">
  <h2 class="not__found__title">We couldn't find news from this date</h2>
  <picture>
      <source
      srcset="./images/not-found-desktop-1x.png 1x, ./images/not-found-desktop-2x.png 2x"
      media="(min-width: 1280px)"
      />
      <source
      srcset="./images/not-found-tablet-1x.png 1x, ./images/not-found-tablet-2x.png 2x"
      media="(min-width: 768px)"
      />
      <source
      srcset="./images/not-found-mobile-1x.png 1x, ./images/not-found-mobile-2x.png 2x"
      media="(max-width: 767px)"
      />
      <img class="not__found__image" src="./images/not-found-desktop-1x.png" alt="not found image">
  </picture>
</div>`}function b(e){const n=e.flat();return console.log("cropped",n),[...n].slice(1,36)}B.addEventListener("click",he);function he(e){if(!e.target.classList.contains("calendar__date"))return;const t=e.target,a=document.querySelector(".calendar__date--active"),r=new Date(e.target.id);console.log("selectedDate",r),console.log("todayDate",new Date),a===t?(k.value="",a.classList.remove("calendar__date--active")):a!==t&&r>new Date?(console.log("selectedDate > new Date()",r>new Date),ge(),q(),j(t)):(q(),j(t))}function q(){const e=document.querySelector(".calendar__date.calendar__date--active");e&&e.classList.remove("calendar__date--active")}function me(e){const n=e.id.split("-").reverse().join("/");return k.value=n,n}function j(e){e.classList.add("calendar__date--active"),me(e),Y()}ce();const _="/goit-js66-team-project/assets/icon-sprites-d3b1bf85.svg",_e=document.querySelector("main"),R="419bd34d8daba21c0a4890e35d027d3f";document.addEventListener("DOMContentLoaded",ye);function F(e){xe(e).then(t=>{t!==void 0&&we(t)})}function ye(){navigator.geolocation?navigator.geolocation.getCurrentPosition(ve,De):alert("Your browser does not support geolocation")}function ve(e){const{latitude:n,longitude:t}=e.coords,a=`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${t}&units=metric&appid=${R}`;F(a)}function we(e){const{name:n}=e,{temp:t}=e.main,{main:a,icon:r}=e.weather[0],o=new Date,{dayOfWeek:i,dateOfWeek:c,monthOfWeek:s}=Oe(o.toUTCString()),u=be(c,s,o),f={temp:Math.floor(t),typeWeather:a,city:n,srcIcon:Se(r),dayOfWeak:i,dateOfWeak:u,imgOpacity:"",dateOpacity:"",splitterOpacity:"",typegroupOpacity:"",textSymbol:"&#176;"};G(f)}function be(e,n,t){return e+" "+n+" "+t.getFullYear()}function Se(e){return`https://openweathermap.org/img/wn/${e}.png`}function xe(e){return fetch(e).then(t=>{if(t.ok)return t.json();G({temp:"no-",typeWeather:"",city:"",srcIcon:"",dayOfWeak:"",dateOfWeak:"",imgOpacity:" opacityElement",dateOpacity:" opacityElement",splitterOpacity:" opacityElement",typegroupOpacity:" opacityElement",textSymbol:"data"})})}function G(e){const n=Ae(e);_e.insertAdjacentHTML("afterend",n)}function Oe(e){const n=e.indexOf(","),t=e.substr(0,n).trim(),a=e.substr(n+1).trim(),r=a.indexOf(" "),o=a.substr(0,r).trim(),i=a.substr(r+1).trim(),c=i.indexOf(" "),s=i.substr(0,c).trim();return{dayOfWeek:t,monthOfWeek:s,dateOfWeek:o}}function De(){const e=`https://api.openweathermap.org/data/2.5/weather?q=lONDON&lang=en&units=metric&appid=${R}`;F(e)}function Ae(e){const{temp:n,typeWeather:t,city:a,srcIcon:r,dayOfWeak:o,dateOfWeak:i,imgOpacity:c,dateOpacity:s,splitterOpacity:u,typegroupOpacity:f,textSymbol:l}=e;return'<section class="weather"><div class="weather__group"><div class="weather__temperaturedate"><span class="weather__temperature">'+String(n)+'</span><span class="weather__symbol" >'+l+'</span></div ><div class="weather__splitter'+u+'"></div > <div class="weather__typegroup'+f+'"><span class="weather__type">'+String(t)+`</span > <div class="weather__citygroup"><svg class="weather__svg"><use href="${_}#location"></use></svg > <p class="weather__city">`+String(a)+'</p > </div ></div ></div ><div class="weather__img'+c+'"><img class="weather__imgvalue" src="'+String(r)+'" alt=""></div ><div class="weather__date'+s+'"><span class="weather__dayofweek">'+String(o)+'</span > <span class="weather__dateofweek">'+String(i)+'</span></div><div class="weather__refgroup"><a class="weather__ref" href="https://sinoptik.ua/" rel="noopener noreferrer" target="_blank">weather for week</a ></div ></section > '}const $e="api-key=9GYTd3hNgT1cJMME7q1HMJAu02NGsmfm",Ee="https://api.nytimes.com";function Le(){try{return fetch(`${Ee}/svc/mostpopular/v2/viewed/1.json?${$e}`).then(e=>{if(!e.ok)throw new Error("Such a request has not been found");return e.json()}).then(({results:e})=>e)}catch(e){console.log(e.message)}}class J{constructor(){this.API_KEY="api-key=9GYTd3hNgT1cJMME7q1HMJAu02NGsmfm",this.API_HOST="https://api.nytimes.com",this.WEB_HOST="https://www.nytimes.com",this.BASE_ENDPOINT_URL=`${this.API_HOST}/svc/topstories/v2/arts.json?${this.API_KEY}`,this.SEARCH_ENDPOINT_URL=`${this.API_HOST}/svc/search/v2/articlesearch.json?`,this.ATEGOTY_END_POINT=`${this.API_HOST}/svc/news/v3/content/all/`,this.SEARCH_CATEGORI=`${this.API_HOST}/svc/news/v3/content/section-list.json?${this.API_KEY}`}}const W=document.querySelector(".articles_container"),O=new J,D=document.querySelector(".not-found"),Me=document.querySelector(".page-header__search-input");Me.addEventListener("change",ke);function ke(e){const n=e.target.value;console.log(n),Te(n)}const Te=async e=>{try{const n=await fetch(`${O.SEARCH_ENDPOINT_URL}q=${e}&${O.API_KEY}`);if(n.ok===!1)throw new Error("Such a request has not been found");const a=(await n.json()).response.docs;a.length?(D.classList.add("is-hidden"),Pe(a)):a.length===0&&je(),console.log(a)}catch(n){console.log(n)}};function Pe(e){const n=e.map(t=>t.multimedia.length===0?{section:t.section_name||t.section,title:t.title||t.headline.main,description:t.abstract,url:t.web_url||t.url,date:t.pub_date||t.created_date,imgCaption:t.lead_paragraph,img:"https://cdn.pixabay.com/photo/2013/03/30/00/10/news-97862_960_720.png"}:{section:t.section_name||t.section,title:t.title||t.headline.main,description:t.abstract,url:t.web_url||t.url,date:t.pub_date||t.created_date,imgCaption:t.lead_paragraph,img:`${O.WEB_HOST}/${t.multimedia[1].url}`});console.log(n),Ce(n)}function Ce(e){const n=e.map(t=>{if(!t)return;const{section:a,title:r,description:o,url:i,date:c,img:s,imgCaption:u}=t;return`<li class="article">
     <div class="article_img_wrapper">
       <p class="already-read">Already read</p>
       <p class="article_category">${a}</p>
       <img class="article_img" src="${s}" alt="${u}" width="395" height="395">
       <div class="article_flag">
       <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
         <svg width="16" height="16">
         <use href="${_}#heart_contur" width="16" height="16"></use>
        </svg>
         </button>
         <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
         <svg width="16" height="16">
         <use href="${_}#heart_fill" width="16" height="16"></use>
       </svg>
          </button>
         </div>
     </div>
     <div class="article_text_wrapper">
       <h2 class="article_title">${r}</h2>
       <p class="article_text">${o}</p>
     </div>
     <div class="article_info_wrapper">
       <p class="article_date">${c}</p>
       <a href="${i}" class="read-more">Read more</a>
     </div>
     </li>`}).join("");return qe(n)}function qe(e){W.innerHTML="",W.insertAdjacentHTML("beforeend",e)}function je(){D.classList.contains("is-hidden")&&D.classList.remove("is-hidden")}const We=new J;let h=[];d.btnOpenModal.forEach(e=>{e.addEventListener("click",Ie)});function Ie(){d.btnOpenModal.forEach(e=>{e.classList.toggle("isActiveBtn")}),d.listConteinerEl.classList.toggle("is-open"),d.listConteinerEl.classList.toggle("list-container--animation")}const He=async()=>{try{const e=await fetch(`${We.SEARCH_CATEGORI}`);if(e.ok===!1)throw new Error("Such a request has not been found");return await(await e.json()).results}catch(e){console.log(e.message)}};He().then(e=>{if(e.forEach(n=>{h.push(n)}),d.viewportWidth<768)d.listConteinerEl.innerHTML=S(e);else if(d.viewportWidth>=768){const n=[];d.categoryBtns.forEach((t,a)=>{t.textContent=e[a].display_name,a=4});for(let t=6;t<h.length;t++)n.push(h[t]);d.listConteinerEl.innerHTML=S(n)}else if(d.viewportWidth>=1280){const n=[];d.categoryBtns.forEach((t,a)=>{t.textContent=e[a].display_name,a=5});for(let t=5;t<h.length;t++)n.push(h[t]);d.listConteinerEl.innerHTML=S(n)}});function S(e){return`<div class="rest__wrapper"><ul class="rest__list list">${e.map(t=>`<li class="rest__item item">${t.display_name}</li>`).join("")}</ul></div >`}function Ne(e){return Be(e).map(t=>{if(!t)return;const{section:a,title:r,description:o,url:i,date:c,img:s,imgCaption:u}=t;return`<li class="article">
     <div class="article_img_wrapper">
       <p class="already-read">Already read</p>
       <p class="article_category">${a}</p>
       <img class="article_img" src="${s[s.length-1].url}" alt="${u}" width="395" height="395">
       <div class="article_flag">
       <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
         <svg width="16" height="16">
         <use href="${_}#heart_contur" width="16" height="16"></use>
        </svg>
         </button>
         <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
         <svg width="16" height="16">
         <use href="${_}#heart_fill" width="16" height="16"></use>
       </svg>
          </button>
         </div>
     </div>
     <div class="article_text_wrapper">
       <h2 class="article_title">${r}</h2>
       <p class="article_text">${o}</p>
     </div>
     <div class="article_info_wrapper">
       <p class="article_date">${c}</p>
       <a href="${i}" class="read-more">Read more</a>
     </div>
     </li>`}).join("")}function Be(e){try{return e.map(t=>t.media.length===0?{section:t.section_name||t.section,title:t.title||t.headline.main,description:t.abstract,url:t.web_url||t.url,date:t.pub_date||t.created_date||t.published_date,img:"https://cdn.pixabay.com/photo/2013/03/30/00/10/news-97862_960_720.png",imgCaption:t.media[0].caption}:{section:t.section_name||t.section,title:t.title||t.headline.main,description:t.abstract,url:t.web_url||t.url,date:t.pub_date||t.created_date||t.published_date,img:t.media[0]["media-metadata"],imgCaption:t.media[0].caption})}catch(n){console.error(n)}}const I=document.querySelector(".articles_container");document.addEventListener("DOMContentLoaded",Ye);function Ye(e){e.preventDefault(),Le().then(n=>Ne(n)).then(n=>{I.insertAdjacentHTML("beforeend",n)}).then(()=>{const n=[...I.querySelectorAll(".article_text")];Re(n)})}function Re(e){e.forEach(n=>{if(n.textContent.length>150){const t=n.textContent.slice(0,150);n.textContent=`${t}...`}})}const A=document.getElementById("pagination"),$=document.querySelector("button.next-page"),E=document.querySelector("button.prev-page"),p={curPage:1,numLinksTwoSide:1,totalPages:10};T();A.addEventListener("click",e=>{if(e.target.dataset.page){const t=parseInt(e.target.dataset.page,10);p.curPage=t,T(),console.log(p),K(),U()}});function T(){const{totalPages:e,curPage:n,numLinksTwoSide:t}=p,a=t+4;let r="",o="",i='<li class="pg-item"><a class="pg-link">...</a></li>',c=0;const s=n-t,u=n+t;let f="";for(let l=1;l<=e;l++)f=l===n?"active":"",e>=2*a-1?s>3&&u<e-3+1?l>=s&&l<=u&&(o+=m(l,f)):n<a&&l<=a||n>e-a&&l>=e-a+1||l===e||l===1?r+=m(l,f):(c++,c===1&&(r+=i)):r+=m(l,f);o?(o=m(1)+i+o+i+m(e),A.innerHTML=o):A.innerHTML=r}function m(e,n=""){return` <li class="pg-item ${n}" data-page="${e}">
        <a class="pg-link" href="#">${e}</a>
    </li>`}document.querySelector(".page-container").addEventListener("click",function(e){Fe(e.target)});function Fe(e){e.classList.contains("first-page")?p.curPage=1:e.classList.contains("last-page")?p.curPage=10:e.classList.contains("prev-page")?(p.curPage--,K(),$.disabled=!1,btnLastPg.disabled=!1):e.classList.contains("next-page")&&(p.curPage++,U(),E.disabled=!1,btnFirstPg.disabled=!1),T()}function K(){p.curPage===1?E.disabled=!0:E.disabled=!1}function U(){p.curPage===p.totalPages?(console.log(p.curPage),$.disabled=!0):$.disabled=!1}
