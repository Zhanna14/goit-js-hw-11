import{i as l,S as d,a as p}from"./assets/vendor-24f26945.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function u(t){const n=`https://pixabay.com/api/?key=43190537-4b40a622c8cb8590492e33b18&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>(r.hits.length===0&&l.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}),r.hits)).catch(r=>{throw console.error("Error fetching images:",r),r})}let i=null,c=null;function m(){c=new d("#gallery a",{captionDelay:250,captionsData:"alt"})}function h(){i=new p().spin(),document.getElementById("loader").appendChild(i.el)}function f(){i&&(i.stop(),document.getElementById("loader").innerHTML="")}function y(t){h();const s=document.getElementById("gallery");s.innerHTML="",t.forEach(n=>{const r=g(n);s.insertAdjacentHTML("beforeend",r)}),f(),c?c.refresh():m()}function g(t){return`<div class="card">
  <div class="image-container">
    <img
      src="${t.webformatURL}"
      alt="${t.tags}"
      class="image"
    />
  </div>
  <div class="options">
      <h2 class="options-name">Likes</h2>
      <h2 class="options-name">Views</h2>
      <h2 class="options-name">Comments</h2>
      <h2 class="options-name">Downloads</h2>
    </div>

    <div class="description">
      <p class="value-description">${t.likes}</p>
      <p class="value-description">${t.views}</p>
      <p class="value-description">${t.comments}</p>
      <p class="value-description">${t.downloads}</p>

    </div>
  </div>
</div>`}const v=document.querySelector("form"),w=document.querySelector("#search-input");v.addEventListener("submit",async t=>{t.preventDefault();const s=w.value.trim();if(s==="")return displayErrorMessage("Please enter a search keyword"),l.error({message:"Please enter a search keyword",position:"topRight"});try{const n=await u(s);y(n)}catch(n){console.error("Error searching images:",n)}});
//# sourceMappingURL=commonHelpers.js.map
