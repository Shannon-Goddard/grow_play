!function(){"use strict";let e=(e,t=!1)=>(e=e.trim(),t)?[...document.querySelectorAll(e)]:document.querySelector(e),t=(t,i,l,a=!1)=>{let s=e(i,a);s&&(a?s.forEach(e=>e.addEventListener(t,l)):s.addEventListener(t,l))},i=(e,t)=>{e.addEventListener("scroll",t)},l=e("#navbar .scrollto",!0),a=()=>{let t=window.scrollY+200;l.forEach(i=>{if(!i.hash)return;let l=e(i.hash);l&&(t>=l.offsetTop&&t<=l.offsetTop+l.offsetHeight?i.classList.add("active"):i.classList.remove("active"))})};window.addEventListener("load",a),i(document,a);let s=t=>{let i=e("#header").offsetHeight,l=e(t).offsetTop;window.scrollTo({top:l-i,behavior:"smooth"})},o=e("#header");if(o){let n=()=>{window.scrollY>100?o.classList.add("header-scrolled"):o.classList.remove("header-scrolled")};window.addEventListener("load",n),i(document,n)}let r=e(".back-to-top");if(r){let c=()=>{window.scrollY>100?r.classList.add("active"):r.classList.remove("active")};window.addEventListener("load",c),i(document,c)}t("click",".mobile-nav-toggle",function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),t("click",".navbar .dropdown > a",function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),t("click",".scrollto",function(t){if(e(this.hash)){t.preventDefault();let i=e("#navbar");if(i.classList.contains("navbar-mobile")){i.classList.remove("navbar-mobile");let l=e(".mobile-nav-toggle");l.classList.toggle("bi-list"),l.classList.toggle("bi-x")}s(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&e(window.location.hash)&&s(window.location.hash)});let d=e("#preloader");d&&window.addEventListener("load",()=>{d.remove()}),new Swiper(".clients-slider",{speed:3500,loop:!0,autoplay:{delay:0,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:40},480:{slidesPerView:3,spaceBetween:60},640:{slidesPerView:4,spaceBetween:80},992:{slidesPerView:6,spaceBetween:120}}}),window.addEventListener("load",()=>{let i=e(".portfolio-container");if(i){let l=new Isotope(i,{itemSelector:".portfolio-item"}),a=e("#portfolio-flters li",!0);t("click","#portfolio-flters li",function(e){e.preventDefault(),a.forEach(function(e){e.classList.remove("filter-active")}),this.classList.add("filter-active"),l.arrange({filter:this.getAttribute("data-filter")}),l.on("arrangeComplete",function(){AOS.refresh()})},!0)}}),GLightbox({selector:".portfolio-lightbox"}),new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})}();