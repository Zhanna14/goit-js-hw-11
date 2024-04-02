import{i as l,S as d,a as u}from"./assets/vendor-24f26945.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function h(e){const n=`https://pixabay.com/api/?key=43190537-4b40a622c8cb8590492e33b18&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>(r.hits.length===0&&l.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}),r.hits)).catch(r=>{throw console.error("Error fetching images:",r),r})}let a=null,c=null;function m(){a=new u().spin(),document.getElementById("loader").appendChild(a.el)}function f(){a&&(a.stop(),document.getElementById("loader").innerHTML="")}function p(e){m();const s=document.getElementById("gallery");s.innerHTML="",e.forEach(n=>{const r=g(n);s.insertAdjacentHTML("beforeend",r)}),f(),c?c.refresh():y()}function g(e){return`<div class="card">
  <div class="image-container">
   <a href="${e.largeImageURL}" data-lightbox="image">
        <img src="${e.webformatURL}" alt="${e.tags}" class="image" />
      </a>
  </div>
  <table class="table">
        <tr> 
          <th class="options-name">Likes</th>
          <th class="options-name">Views</th>
          <th class="options-name">Comments</th>
          <th class="options-name">Downloads</th>
        </tr>
        <tr> 
          <td class="value-description">${e.likes}</td>
          <td class="value-description">${e.views}</td>
          <td class="value-description">${e.comments}</td>
          <td class="value-description">${e.downloads}</td>
        </tr>
    </table>
  </div>`}function y(){c=new d("#gallery a",{captionDelay:250,captionsData:"alt"})}const b=document.querySelector("form");document.querySelector("#search");b.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.search.value.trim();if(s==="")return displayErrorMessage("Please enter a search keyword"),l.error({message:"Please enter a search keyword",position:"topRight"});h(s).then(n=>{p(n)}).catch(n=>{console.error("Error searching images:",n)})});
//# sourceMappingURL=commonHelpers.js.map
