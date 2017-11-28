(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-youhuiquan" viewBox="0 0 1024 1024">'+""+'<path d="M19.134 411.668c3.159-6.791 8.031-12.334 14.069-16.217-1.243 0.020 5.116-3.502 12.227-4.951-2.555 0.256 2.155-0.779 7.105-0.788l108.999 0.001v527.958h-109.191c-9.763 0-18.205-3.379-25.329-10.137-7.141-6.752-10.695-15.018-10.695-24.758v-132.836c10.502 0 20.26-2.062 29.267-6.193 9.007-4.118 16.882-9.571 23.639-16.329s12-14.814 15.764-24.198c3.751-9.373 5.628-18.944 5.628-28.707 0-21.002-7.141-38.832-21.386-53.471-14.267-14.64-31.905-22.318-52.912-23.079v-172.223c0-5.237 0.932-9.938 2.814-14.068zM1024.958 534.375c-0.963 6.215-3.443 11.725-7.047 16.306-0.654 1.332-4.773 4.903-10.399 7.891-5.628 3.011-12.21 5.26-19.701 6.752l-58.54 18.012v-61.906c21.002-4.503 29.262-14.25 24.764-29.273l-56.285-181.234-100.186 31.521h-320.83l392.867-121.577-24.764-79.924c-1.515-6.001-5.26-10.502-11.261-13.509-6.012-2.989-12.018-3.751-18.012-2.254l-565.101 175.614c-6.012 1.515-10.521 5.26-13.503 11.261-3.011 6.018-3.764 12.018-2.254 18.012l4.498 12.379h-61.906l-12.379-40.528c-3.006-9.007-2.254-17.82 2.254-26.453 4.503-8.615 11.628-14.441 21.386-17.446l655.168-203.749c3.087-0.817 6.633-1.285 10.286-1.285 2.732 0 5.404 0.261 7.989 0.763 5.725 1.082 11.166 3.895 16.060 8.399 4.876 4.503 8.057 9.763 9.571 15.764l136.21 442.405c1.486 4.498 1.858 9.198 1.119 14.063zM870.73 400.42c6.757 7.141 10.131 15.583 10.131 25.329v34.895c-1.508-0.734-3.373-1.124-5.628-1.124-10.521 0-19.526 3.571-27.019 10.689-7.515 7.141-11.261 15.583-11.261 25.329 0 9.763 3.745 18.205 11.261 25.329 7.491 7.148 16.498 10.695 27.019 10.695h5.628v32.645h-5.628c-10.521 0-19.526 3.571-27.019 10.695-7.515 7.148-11.261 15.583-11.261 25.329 0 6.757 1.684 12.769 5.062 18.012 3.379 5.254 8.057 9.571 14.075 12.95 5.472 3.184 12.043 5.062 19.051 5.062 0.030 0 0.061 0 0.090 0h5.622v32.645h-5.628c-0.021 0-0.047 0-0.073 0-7.014 0-13.589 1.881-19.248 5.167-5.834 3.28-10.512 7.609-13.89 12.846-3.379 5.26-5.062 11.266-5.062 18.012 0 9.763 3.745 18.205 11.261 25.329 7.491 7.148 16.498 10.695 27.019 10.695h5.628v32.645h-5.628c-10.521 0-19.526 3.565-27.019 10.689-7.515 7.148-11.261 15.588-11.261 25.329 0 9.763 3.745 18.205 11.261 25.329 7.491 7.148 16.498 10.695 27.019 10.695h5.628v37.149c0 6.001-1.508 11.82-4.498 17.446-3.679 6.891-9.693 12.128-16.962 14.719-1.616 1.219-7.435 2.729-13.435 2.729h-638.274v-527.958h638.279c9.741 0 18.012 3.571 24.764 10.695h-0.005zM615.198 652.009l58.54-138.464h-74.297l-49.533 144.092-48.403-144.086h-75.428l58.54 138.464h-58.54l1.124 48.409h73.172l9.007 16.882v14.633h-83.303v47.279h83.303v65.292h72.049v-65.297h81.050v-47.279h-81.050v-14.633l9.007-16.882h72.043v-48.409h-47.279z" fill="#436434" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)